import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';
import colors from '../../styles/colors';

const TransitionContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(194, 39, 60, 0.3);

  &::before {
    content: '$';
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -10px;
    border: 2px solid ${colors.primary}40;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

const ShiningEffect = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    ${colors.primary}40,
    ${colors.primaryLight}40,
    transparent
  );
`;

const PriceTransition = () => {
  const { ref } = useParallax({
    speed: -5,
  });

  return (
    <TransitionContainer ref={ref}>
      <ShiningEffect
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <CoinIcon
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      />
    </TransitionContainer>
  );
};

export default PriceTransition; 