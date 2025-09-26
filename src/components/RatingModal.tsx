import React from "react";
import { motion, AnimatePresence } from "@/animations";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  currentRating: number;
  onRatingSubmit: (rating: number) => void;
}

const RatingModal: React.FC<RatingModalProps> = ({
  isOpen,
  onClose,
  title,
  currentRating,
  onRatingSubmit,
}) => {
  const { toast } = useToast();

  const handleRatingSubmit = async (rating: number) => {
    try {
      console.log('Submitting rating:', rating);
      await onRatingSubmit(rating);
      const message = rating === 0 
        ? `Rating removed for "${title}"`
        : `You rated "${title}" ${rating}/5 stars.`;
      
      toast({
        title: rating === 0 ? "Rating Removed" : "Rating Updated",
        description: message,
      });
      
      onClose();
    } catch (error) {
      console.error("Error updating rating:", error);
      toast({
        title: "Error",
        description: "Failed to update rating. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="bg-background border border-border rounded-lg p-6 max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Rate "{title}"
            </motion.h3>
            
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Rating
                value={currentRating}
                onValueChange={handleRatingSubmit}
                max={5}
                precision={1}
                size={32}
                variant="yellow"
                className="gap-1"
              />
            </motion.div>
            
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground">
                {currentRating > 0 
                  ? `You rated this ${currentRating}/5 stars`
                  : "Click on the stars to rate this item"
                }
              </p>
            </motion.div>
            
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleRatingSubmit(0)}
                className="flex-1"
              >
                Remove Rating
              </Button>
            </motion.div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-2 right-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RatingModal;
