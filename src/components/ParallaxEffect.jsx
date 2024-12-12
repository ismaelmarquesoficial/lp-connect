import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ParallaxEffect = ({ children, offset = 50, direction = 'up' }) => {
  const { scrollYProgress } = useScroll();
  
  const yRange = direction === 'up' ? [offset, -offset] : [-offset, offset];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <ParallaxContainer style={{ y }}>
      {children}
    </ParallaxContainer>
  );
};

export default ParallaxEffect; 