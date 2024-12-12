import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  },
  slideRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } }
  }
};

const AnimatedElement = ({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  className,
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: animations[animation].hidden,
        visible: {
          ...animations[animation].visible,
          transition: {
            ...animations[animation].visible.transition,
            delay
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 