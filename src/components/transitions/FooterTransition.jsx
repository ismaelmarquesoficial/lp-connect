import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../styles/colors';

const TransitionContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%,
    ${colors.primary}40 20%,
    ${colors.primary} 50%,
    ${colors.primary}40 80%,
    transparent 100%
  );
`;

const FooterTransition = () => {
  return (
    <TransitionContainer>
      <AnimatedLine
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ 
          x: '100%',
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </TransitionContainer>
  );
};

export default FooterTransition; 