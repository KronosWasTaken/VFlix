import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Info, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { getBackdropUrl } from "@/lib/api";
import { Movie, TVShow } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion, slideVariants, contentVariants, itemVariants, heroButtonVariants, heroIndicatorVariants, hoverVariants } from "@/animations";

interface HeroSectionProps {
  item: Movie | TVShow;
  className?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  direction?: "left" | "right" | null;
  currentIndex?: number;
  totalItems?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  item,
  className,
  onPrevious,
  onNext,
  direction,
  currentIndex = 0,
  totalItems = 0,
}) => {
  const navigate = useNavigate();

  const title = "title" in item ? item.title : item.name;
  const releaseYear =
    "release_date" in item
      ? item.release_date?.substring(0, 4)
      : item.first_air_date?.substring(0, 4);
  const mediaType = "title" in item ? "movie" : "tv";

  // Format vote average to a score out of 10
  const rating = item.vote_average.toFixed(1);

  // Extract genre names
  const genres =
    item.genres
      ?.map((genre) => genre.name)
      .slice(0, 3)
      .join(" • ") || "";

  // Get backdrop URL
  const backdropUrl = getBackdropUrl(item.backdrop_path, "original");

  const handlePlayClick = () => {
    navigate(`/${mediaType}/${item.id}`);
  };

  const handleMoreInfoClick = () => {
    navigate(`/${mediaType}/${item.id}`);
  };


  return (
    <motion.div
      className={cn(
        "relative w-full h-[85vh] max-h-[900px] min-h-[600px] overflow-hidden hero-section",
        className
      )}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={direction}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    >
      {/* Backdrop image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-105"
        style={{
          backgroundImage: backdropUrl ? `url(${backdropUrl})` : "none",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        {/* Strong full-width bottom-to-top dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </motion.div>

      {/* Navigation Arrows */}
      {onPrevious && (
        <motion.button
          type="button"
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 text-white rounded-full p-2 shadow-lg"
          {...hoverVariants.button}
          variants={heroButtonVariants.left}
          initial="initial"
          animate="animate"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      )}
      {onNext && (
        <motion.button
          type="button"
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 text-white rounded-full p-2 shadow-lg"
          {...hoverVariants.button}
          variants={heroButtonVariants.right}
          initial="initial"
          animate="animate"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      )}

      {/* Carousel Indicator */}
      {totalItems > 1 && (
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
          variants={heroIndicatorVariants.container}
          initial="initial"
          animate="animate"
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <motion.button
              key={index}
              className={cn(
                "w-2.5 h-2.5 rounded-full",
                index === currentIndex
                  ? "bg-primary"
                  : "bg-white/50"
              )}
              onClick={() => {
                // Optional: Add click handler to jump to specific slide
              }}
              aria-label={`Go to slide ${index + 1}`}
              {...hoverVariants.indicator}
              animate={{
                scale: index === currentIndex ? 1.25 : 1,
                backgroundColor: index === currentIndex ? "hsl(var(--primary))" : "rgba(255,255,255,0.5)"
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>
      )}

      {/* Centered content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end items-center pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-3xl text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl mb-4 sm:mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base text-white/90 mb-4 drop-shadow"
            variants={itemVariants}
          >
            {releaseYear && (
              <motion.span 
                className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                {...hoverVariants.tag}
              >
                {releaseYear}
              </motion.span>
            )}
            {rating && (
              <motion.div 
                className="flex items-center px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                {...hoverVariants.tag}
              >
                <span className="text-yellow-400 mr-1">★</span>
                <span>{rating}/10</span>
              </motion.div>
            )}
            {genres && (
              <motion.span 
                className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                {...hoverVariants.tag}
              >
                {genres}
              </motion.span>
            )}
          </motion.div>

          <motion.p 
            className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow line-clamp-3 sm:line-clamp-none"
            variants={itemVariants}
          >
            {item.overview}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <motion.div
              {...hoverVariants.card}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg"
                onClick={handlePlayClick}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Play Now
              </Button>
            </motion.div>
            <motion.div
              {...hoverVariants.card}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg backdrop-blur-sm"
                onClick={handleMoreInfoClick}
              >
                <Info className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                More Info
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
