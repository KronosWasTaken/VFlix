import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPosterUrl } from "@/lib/api";
import { useWatchlist } from "@/contexts/WatchlistContext";
import { MediaType, ContinueWatchingItem } from "@/lib/types";
import { motion, cardVariants, imageVariants, overlayVariants, buttonVariants, overlayContentVariants, textVariants } from "@/animations";
import { useToast } from "@/hooks/use-toast";

interface MediaCardProps {
  id: number;
  title: string;
  posterPath: string | undefined;
  rating: number;
  mediaType: MediaType;
  year?: string;
  className?: string;
  continueWatchingData?: ContinueWatchingItem;
  onRemoveContinueWatching?: () => void;
}

const MediaCard = ({
  id,
  title,
  posterPath,
  rating,
  mediaType,
  year,
  className,
  continueWatchingData,
  onRemoveContinueWatching,
}: MediaCardProps) => {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist, toggleWatchLater } = useWatchlist();
  const { toast } = useToast();
  const inWatchlist = isInWatchlist(id);


  const handleWatchlistToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWatchlist) {
      removeFromWatchlist(id);
      toast({
        title: "Removed from watchlist",
        description: `${title} has been removed from your watchlist.`,
      });
    } else {
      try {
        await addToWatchlist({
          id,
          title,
          poster_path: posterPath === null ? undefined : posterPath,
          media_type: mediaType === "movie" ? "movie" : "tv",
          added_at: Date.now(),
          watched: false,
          watch_later: false,
        });
        toast({
          title: "Added to watchlist",
          description: `${title} has been added to your watchlist.`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to add to watchlist. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleWatchLaterToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toggleWatchLater(id);
    toast({
      title: "Watch Later toggled",
      description: `${title} watch later status has been updated.`,
    });
  };


  const handleRemoveContinueWatching = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRemoveContinueWatching?.();
  };

  const formattedRating = rating > 0 ? rating.toFixed(1) : "N/A";

  return (
    <motion.div 
      className="relative"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {continueWatchingData && onRemoveContinueWatching && (
        <motion.div
          variants={buttonVariants.removeButton}
          initial="initial"
          animate="animate"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/60 text-foreground hover:text-destructive hover:bg-background/80 z-10"
            onClick={handleRemoveContinueWatching}
          >
            <X className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
      <Link
        to={`/${mediaType}/${id}`}
        state={
          continueWatchingData ? { continueWatchingData, play: true } : undefined
        }
      >
        <Card
          className={cn(
            "overflow-hidden border-0 bg-transparent",
            className
          )}
        >
          <div className="relative w-full aspect-[2/3] overflow-hidden rounded-md">
            {posterPath ? (
              <motion.img
                src={getPosterUrl(posterPath, "w342") || undefined}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
                variants={imageVariants}
                whileHover="hover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted text-sm sm:text-base">
                No Poster
              </div>
            )}

            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex flex-col justify-end p-2 sm:p-3"
              variants={overlayVariants}
              initial="hidden"
              whileHover="hover"
            >
              <motion.div 
                className="flex items-center justify-between"
                variants={overlayContentVariants}
                initial="hidden"
                whileHover="hover"
              >
                <div className="flex items-center space-x-1 bg-background/60 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                  <span className="text-foreground capitalize">
                    {mediaType}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <motion.div
                    {...buttonVariants.scale}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-background/60 text-foreground hover:text-primary hover:bg-background/80"
                      onClick={handleWatchLaterToggle}
                      title="Mark as Watch Later"
                    >
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    {...buttonVariants.scale}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-background/60 text-foreground hover:text-primary hover:bg-background/80"
                      onClick={handleWatchlistToggle}
                      title={inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                    >
                      <Heart
                        className={cn(
                          "h-3 w-3 sm:h-4 sm:w-4",
                          inWatchlist ? "fill-red-500 text-red-500" : ""
                        )}
                      />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <CardContent className="p-1.5 sm:p-2">
            <motion.h3 
              className="text-xs sm:text-sm font-medium line-clamp-1 mt-0.5 sm:mt-1 text-foreground"
              variants={textVariants.fadeIn}
              initial="initial"
              animate="animate"
            >
              {title}
            </motion.h3>
            <motion.div 
              className="flex items-center justify-between mt-0.5 sm:mt-1"
              variants={textVariants.fadeInDelayed}
              initial="initial"
              animate="animate"
            >
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                {year}
              </p>
              {rating > 0 && (
                <div className="flex items-center">
                  <span className="text-[10px] sm:text-xs text-yellow-500 mr-0.5 sm:mr-1">
                    ★
                  </span>
                  <span className="text-[10px] sm:text-xs text-foreground">
                    {formattedRating}
                  </span>
                </div>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default MediaCard;
