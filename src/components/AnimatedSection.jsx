import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled(motion.section)`
  position: relative;
  z-index: 2;
`;

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const AnimatedSection = ({ children, delay = 0, ...props }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      {...props}
    >
      {children}
    </Section>
  );
};

export default AnimatedSection; 