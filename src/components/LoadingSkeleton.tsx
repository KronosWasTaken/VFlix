import React from "react";
import { motion, loadingVariants } from "@/animations";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "card" | "text" | "circle" | "rect";
  width?: string | number;
  height?: string | number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className,
  variant = "rect",
  width,
  height,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "card":
        return "w-[140px] sm:w-[150px] md:w-[180px] aspect-[2/3] rounded-md";
      case "text":
        return "h-4 rounded";
      case "circle":
        return "rounded-full";
      case "rect":
      default:
        return "rounded";
    }
  };

  return (
    <motion.div
      className={cn(
        "bg-muted",
        getVariantStyles(),
        className
      )}
      style={{ width, height }}
      animate={loadingVariants.pulse}
    />
  );
};

export default LoadingSkeleton;
