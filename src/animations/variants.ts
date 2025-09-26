export const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

export const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3
    }
  }
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

export const slideVariants = {
  enter: (direction: string) => ({
    x: direction === "left" ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: string) => ({
    zIndex: 0,
    x: direction === "left" ? -1000 : 1000,
    opacity: 0,
  }),
};

export const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const carouselVariants = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  title: {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2 }
    }
  },
  button: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.3 }
    }
  },
  buttonRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.3 }
    }
  },
  items: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.4 }
    }
  },
  item: (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5 + index * 0.1 }
    }
  })
};

export const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { opacity: 0 }
};

export const loadingVariants = {
  pulse: {
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const buttonVariants = {
  scale: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  },
  removeButton: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.2 }
  }
};

export const overlayContentVariants = {
  hidden: { y: 20, opacity: 0 },
  hover: { y: 0, opacity: 1 },
  transition: { delay: 0.1 }
};

export const textVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.3 }
  },
  fadeInDelayed: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4 }
  }
};

export const heroButtonVariants = {
  left: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.5 }
  },
  right: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.5 }
  }
};

export const heroIndicatorVariants = {
  container: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.7 }
  }
};

export const hoverVariants = {
  button: {
    whileHover: { scale: 1.1, backgroundColor: "rgba(0,0,0,0.9)" },
    whileTap: { scale: 0.9 }
  },
  buttonSmall: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
  },
  indicator: {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.9 }
  },
  card: {
    whileHover: { scale: 1.05 }
  },
  tag: {
    whileHover: { scale: 1.05 }
  }
};

export const ratingVariants = {
  modal: {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.2 }
    }
  },
  star: {
    inactive: { 
      scale: 1, 
      color: "#6b7280",
      filter: "none"
    },
    active: { 
      scale: 1.1, 
      color: "#fbbf24",
      filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    hover: {
      scale: 1.15,
      color: "#f59e0b",
      filter: "drop-shadow(0 0 12px rgba(245, 158, 11, 0.7))",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },
  starContainer: {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  },
  starItem: (index: number) => ({
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.3 + index * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  })
};
