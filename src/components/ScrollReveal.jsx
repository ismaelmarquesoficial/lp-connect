import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  scale: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  rotate: {
    hidden: { rotate: 180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 }
  }
};

const ScrollReveal = ({ 
  children, 
  effect = 'slideUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={variants[effect]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 