import React, { useEffect, useState, useCallback, useRef } from "react";
import { api } from "@/lib/api";
import { Movie, TVShow } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import MediaCarousel from "@/components/MediaCarousel";
import HeroSection from "@/components/HeroSection";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useWatchlist } from "@/contexts/WatchlistContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ToastAction } from "@/components/ui/toast";
import MediaCard from "@/components/MediaCard";
import { Helmet } from "react-helmet-async";

const AUTO_SCROLL_INTERVAL = 5000;
const TRANSITION_DURATION = 500;
const FETCH_DEBOUNCE = 500;

const HomePage: React.FC = () => {
  const [trendingAll, setTrendingAll] = useState<(Movie | TVShow)[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [popularTVShows, setPopularTVShows] = useState<TVShow[]>([]);
  const [featuredItems, setFeaturedItems] = useState<(Movie | TVShow)[]>([]);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlistItems, setWatchlistItems] = useState<(Movie | TVShow)[]>([]);
  const [, setIsWatchlistLoading] = useState(true);
  const { continueWatching, watchlist, removeFromContinueWatching } =
    useWatchlist();
  const { session, loading: authLoading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !session) {
      const timer = setTimeout(() => {
        toast({
          title: "Authentication is here 🎉 ",
          description:
            "Login to save your watchlist and continue watching progress.",
          duration: 3500,
          action: (
            <Link to="/register">
              <ToastAction altText="Register">Register</ToastAction>
            </Link>
          ),
        });
      }, 100); // 100ms delay

      return () => clearTimeout(timer);
    }
  }, [session, authLoading, toast]);
  const [continueWatchingItems, setContinueWatchingItems] = useState<
    (Movie | TVShow)[]
  >([]);

  const itemsCache = useRef<Map<number, Movie | TVShow>>(new Map());
  const fetchTimeout = useRef<NodeJS.Timeout>();

  const handleSlide = useCallback(
    (direction: "left" | "right") => {
      if (isTransitioning || featuredItems.length <= 1) return;

      setIsTransitioning(true);
      setSlideDirection(direction);

      const newIndex =
        direction === "left"
          ? (currentFeaturedIndex + 1) % featuredItems.length
          : (currentFeaturedIndex - 1 + featuredItems.length) %
            featuredItems.length;

      setTimeout(() => {
        setCurrentFeaturedIndex(newIndex);
        setSlideDirection(null);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    },
    [currentFeaturedIndex, featuredItems.length, isTransitioning]
  );

  const handleNextHero = useCallback(() => {
    handleSlide("left");
  }, [handleSlide]);

  const handlePreviousHero = useCallback(() => {
    handleSlide("right");
  }, [handleSlide]);

  useEffect(() => {
    if (featuredItems.length <= 1) return;

    let intervalId: NodeJS.Timeout;
    let isHovered = false;

    const startAutoScroll = () => {
      if (!isHovered && !isTransitioning) {
        intervalId = setInterval(handleNextHero, AUTO_SCROLL_INTERVAL);
      }
    };

    const handleMouseEnter = () => {
      isHovered = true;
      clearInterval(intervalId);
    };

    const handleMouseLeave = () => {
      isHovered = false;
      startAutoScroll();
    };

    startAutoScroll();

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.addEventListener("mouseenter", handleMouseEnter);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(intervalId);
      if (heroSection) {
        heroSection.removeEventListener("mouseenter", handleMouseEnter);
        heroSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [featuredItems.length, handleNextHero, isTransitioning]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setIsLoading(true);

        const trendingData = await api.getTrending("all", "day");
        setTrendingAll(trendingData.results);

        const topTrending = trendingData.results.slice(0, 5);
        const featuredItemsWithDetails = await Promise.all(
          topTrending.map(async (item: Movie | TVShow) => {
            const mediaType =
              item.media_type || ("title" in item ? "movie" : "tv");
            if (mediaType === "movie") {
              return await api.getMovieDetails(item.id.toString());
            } else {
              return await api.getTvDetails(item.id.toString());
            }
          })
        );
        setFeaturedItems(featuredItemsWithDetails);

        const moviesData = await api.getPopular("movie");
        setPopularMovies(
          moviesData.results.map((movie: Movie) => ({
            ...movie,
            media_type: "movie",
          }))
        );

        const tvData = await api.getPopular("tv");
        setPopularTVShows(
          tvData.results.map((show: TVShow) => ({ ...show, media_type: "tv" }))
        );
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    const fetchContinueWatchingDetails = async () => {
      if (!continueWatching.length) {
        setContinueWatchingItems([]);
        return;
      }

      try {
        const items = await Promise.all(
          continueWatching.map(async (item) => {
            try {
              let details;
              if (item.media_type === "movie") {
                details = await api.getMovieDetails(item.id.toString());
                details = { ...details, media_type: "movie" as const };
              } else {
                details = await api.getTvDetails(item.id.toString());
                details = { ...details, media_type: "tv" as const };
              }
              return details;
            } catch (error) {
              // Return a fallback item with basic info if API call fails
              return item.media_type === "movie"
                ? ({
                    id: item.id,
                    title: item.title,
                    poster_path: item.poster_path,
                    media_type: "movie" as const,
                    vote_average: item.rating || 0,
                    vote_count: 0,
                    popularity: 0,
                    overview: "",
                    backdrop_path: undefined,
                    release_date: "",
                  } as Movie)
                : ({
                    id: item.id,
                    name: item.title,
                    poster_path: item.poster_path,
                    media_type: "tv" as const,
                    vote_average: item.rating || 0,
                    vote_count: 0,
                    popularity: 0,
                    overview: "",
                    backdrop_path: undefined,
                    first_air_date: "",
                  } as TVShow);
            }
          })
        );
        setContinueWatchingItems(items);
      } catch (error) {
      }
    };

    fetchContinueWatchingDetails();
  }, [continueWatching]);

  useEffect(() => {
    const fetchWatchlistDetails = async () => {
      if (!watchlist.length) {
        setWatchlistItems([]);
        setIsWatchlistLoading(false);
        return;
      }

      try {
        setIsWatchlistLoading(true);

        const itemsToFetch = watchlist.filter(
          (item) => !itemsCache.current.has(item.id)
        );

        if (itemsToFetch.length > 0) {
          await Promise.all(
            itemsToFetch.map(async (item) => {
              try {
                let details;
                if (item.media_type === "movie") {
                  details = await api.getMovieDetails(item.id.toString());
                  details = { ...details, media_type: "movie" as const };
                } else {
                  details = await api.getTvDetails(item.id.toString());
                  details = { ...details, media_type: "tv" as const };
                }
                itemsCache.current.set(item.id, details);
                return details;
              } catch (error) {
                const fallbackItem: Movie | TVShow = item.media_type === "movie" 
                  ? {
                      id: item.id,
                      title: item.title,
                      poster_path: item.poster_path,
                      backdrop_path: undefined,
                      overview: "",
                      vote_average: 0,
                      vote_count: 0,
                      popularity: 0,
                      media_type: "movie",
                      release_date: "",
                    }
                  : {
                      id: item.id,
                      name: item.title,
                      poster_path: item.poster_path,
                      backdrop_path: undefined,
                      overview: "",
                      vote_average: 0,
                      vote_count: 0,
                      popularity: 0,
                      media_type: "tv",
                      first_air_date: "",
                    };
                itemsCache.current.set(item.id, fallbackItem);
                return fallbackItem;
              }
            })
          );
        }

        const orderedItems = watchlist.map(
          (item) => itemsCache.current.get(item.id)!
        );
        setWatchlistItems(orderedItems);
      } catch (error) {
      } finally {
        setIsWatchlistLoading(false);
      }
    };

    if (fetchTimeout.current) {
      clearTimeout(fetchTimeout.current);
    }

    fetchTimeout.current = setTimeout(fetchWatchlistDetails, FETCH_DEBOUNCE);

    return () => {
      if (fetchTimeout.current) {
        clearTimeout(fetchTimeout.current);
      }
    };
  }, [watchlist]);

  if (isLoading && !featuredItems.length) {
    return (
      <>
        <Helmet>
          <title>VFlix - Watch Movies & TV Shows Online</title>
          <meta
            name="description"
            content="Stream trending movies and TV shows from multiple sources. Discover, watch, and manage your watchlist all in one place."
          />
          <meta
            property="og:title"
            content="VFlix - Watch Movies & TV Shows Online"
          />
          <meta
            property="og:description"
            content="Stream trending movies and TV shows from multiple sources. Discover, watch, and manage your watchlist all in one place."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vflix.vercel.app/" />
          <meta property="og:image" content="/favicon.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="VFlix - Watch Movies & TV Shows Online"
          />
          <meta
            name="twitter:description"
            content="Stream trending movies and TV shows from multiple sources. Discover, watch, and manage your watchlist all in one place."
          />
          <meta name="twitter:image" content="/favicon.svg" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <div className="space-y-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <LoadingSkeleton 
              className="h-[85vh] max-h-[900px] min-h-[600px] w-full rounded-lg" 
              variant="rect"
            />
            <div className="space-y-4">
              <LoadingSkeleton 
                className="h-8 w-48 mx-auto" 
                variant="text"
              />
              <div className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide pb-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <LoadingSkeleton 
                    key={index}
                    className="flex-shrink-0 w-[140px] sm:w-[150px] md:w-[180px] aspect-[2/3] rounded-md"
                    variant="card"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <LoadingSkeleton 
                className="h-8 w-48 mx-auto" 
                variant="text"
              />
              <div className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide pb-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <LoadingSkeleton 
                    key={index}
                    className="flex-shrink-0 w-[140px] sm:w-[150px] md:w-[180px] aspect-[2/3] rounded-md"
                    variant="card"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>VFlix - Watch Movies & TV Shows Online</title>
        <meta
          name="description"
          content="Stream trending movies and TV shows from multiple sources. Discover, watch, and manage your watchlist all in one place."
        />
        <meta
          property="og:title"
          content="VFlix - Watch Movies & TV Shows Online"
        />
        <meta
          property="og:description"
          content="Stream trending movies and TV shows from multiple sources. Discover, watch, and manage your watchlist all in one place."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vflix.vercel.app/" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VFlix - Watch Movies & TV Shows Online"
        />
        <meta
          name="twitter:description"
          content="Stream trending movies and TV shows from multiple sources. Discover, watch, and manage your watchlist all in one place."
        />
        <meta name="twitter:image" content="/favicon.svg" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {isLoading ? (
          <div className="space-y-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <Skeleton className="h-[85vh] max-h-[900px] min-h-[600px] w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-48 mx-auto" />
              <Skeleton className="h-[200px] w-full rounded-lg" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-48 mx-auto" />
              <Skeleton className="h-[200px] w-full rounded-lg" />
            </div>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* Hero Section */}
            {featuredItems.length > 0 && (
              <HeroSection
                item={featuredItems[currentFeaturedIndex]}
                onPrevious={handlePreviousHero}
                onNext={handleNextHero}
                direction={slideDirection}
                currentIndex={currentFeaturedIndex}
                totalItems={featuredItems.length}
              />
            )}

            {/* Continue Watching Section */}
            {continueWatchingItems.length > 0 && (
              <div className="px-4 sm:px-6 md:px-8">
                <MediaCarousel
                  title="Continue Watching"
                  items={continueWatchingItems}
                  renderItem={(item) => {
                    const continueWatchingData = continueWatching.find(
                      (cw) => cw.id === item.id
                    );
                    return (
                      <MediaCard
                        id={item.id}
                        title={
                          ("title" in item ? item.title : item.name) || "Unknown"
                        }
                        posterPath={item.poster_path}
                        rating={item.vote_average}
                        mediaType={"title" in item ? "movie" : "tv"}
                        year={
                          "release_date" in item
                            ? item.release_date?.substring(0, 4)
                            : item.first_air_date?.substring(0, 4)
                        }
                        continueWatchingData={continueWatchingData}
                        onRemoveContinueWatching={() =>
                          removeFromContinueWatching(item.id)
                        }
                      />
                    );
                  }}
                />
              </div>
            )}

            {/* Watchlist Section */}
            {watchlist.length > 0 && (
              <div className="px-4 sm:px-6 md:px-8">
                <MediaCarousel title="My Watchlist" items={watchlistItems} />
              </div>
            )}

            {/* Trending Section */}
            <div className="px-4 sm:px-6 md:px-8">
              <MediaCarousel title="Trending Now" items={trendingAll} />
            </div>

            {/* Popular Movies Section */}
            <div className="px-4 sm:px-6 md:px-8">
              <MediaCarousel title="Popular Movies" items={popularMovies} />
            </div>

            {/* Popular TV Shows Section */}
            <div className="px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16">
              <MediaCarousel title="Popular TV Shows" items={popularTVShows} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
