import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const IconContainer = styled(motion.div)`
  width: ${props => props.$size || '60px'};
  height: ${props => props.$size || '60px'};
  background: ${colors.primary};
  border-radius: ${props => props.$rounded ? '50%' : '15px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, ${colors.primary}20, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      opacity: 0.5;
    }
  }

  i {
    color: ${colors.white};
    font-size: ${props => props.$iconSize || '1.5rem'};
    z-index: 1;
  }
`;

const AnimatedIcon = ({ 
  icon, 
  size, 
  iconSize,
  rounded = false,
  hover = true,
  pulse = true,
  rotate = true,
  ...props 
}) => {
  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: hover ? {
      scale: 1.1,
      rotate: rotate ? 360 : 0,
      transition: { duration: 0.3 }
    } : {},
    tap: {
      scale: 0.95
    }
  };

  return (
    <IconContainer
      $size={size}
      $iconSize={iconSize}
      $rounded={rounded}
      variants={iconVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      <motion.i 
        className={icon}
        animate={pulse ? {
          scale: [1, 1.2, 1],
          transition: {
            duration: 2,
            repeat: Infinity
          }
        } : {}}
      />
    </IconContainer>
  );
};

export default AnimatedIcon; 