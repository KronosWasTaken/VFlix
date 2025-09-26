import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "h-16 w-16 sm:h-20 sm:w-20", 
  showText = false,
  textClassName = "font-oswald font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
}) => {
  return (
    <div className={cn("flex items-center", showText ? "space-x-2" : "")}>
      <img 
        src="/favicon.svg" 
        alt="VFlix Logo" 
        className={cn("transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-primary/20", className)}
      />
      {showText && (
        <span className={textClassName}>
          VFlix
        </span>
      )}
    </div>
  );
};

export default Logo;
