import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';

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
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;

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
    initial: { 
      scale: 0.8,
      rotate: -180,
      opacity: 0 
    },
    animate: { 
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    },
    hover: hover ? {
      scale: 1.05,
      rotate: rotate ? 180 : 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.8
      }
    } : {},
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20
      }
    }
  };

  const pulseAnimation = pulse ? {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 0.5
    }
  } : {};

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
        animate={pulseAnimation}
      />
    </IconContainer>
  );
};

export default AnimatedIcon; 