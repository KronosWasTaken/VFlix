export const transitions = {
  fast: { duration: 0.2 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  slower: { duration: 0.8 },
  
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30
  },
  
  easeOut: { duration: 0.3, ease: "easeOut" as const },
  easeIn: { duration: 0.3, ease: "easeIn" as const },
  easeInOut: { duration: 0.3, ease: "easeInOut" as const },
  
  stagger: (delay: number = 0.1) => ({
    staggerChildren: delay
  }),
  
  delay: (delay: number) => ({ delay })
};

export const hoverAnimations = {
  scale: (scale: number = 1.05) => ({
    whileHover: { scale },
    whileTap: { scale: scale * 0.9 }
  }),
  
  lift: (y: number = -5) => ({
    whileHover: { y, scale: 1.02 }
  }),
  
  glow: (color: string) => ({
    whileHover: { 
      boxShadow: `0 0 20px ${color}`,
      scale: 1.02
    }
  })
};

export const entranceAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
  },
  
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
  }
};

export const createStaggerAnimation = (delay: number = 0.1) => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }
});
