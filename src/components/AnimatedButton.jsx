import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';

const Button = styled(motion.button)`
  padding: ${props => props.$primary ? '1rem 2.5rem' : '0.9rem 2rem'};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${props => props.$primary ? colors.primary : 'transparent'};
  color: ${colors.white};
  border: ${props => props.$primary ? 'none' : `2px solid ${colors.primary}`};
  box-shadow: ${props => props.$primary ? '0 4px 15px rgba(194, 39, 60, 0.3)' : 'none'};

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    transform: rotate(45deg);
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    padding: ${props => props.$primary ? '0.8rem 2rem' : '0.7rem 1.5rem'};
    font-size: 0.9rem;
  }
`;

const AnimatedButton = ({ children, primary, ...props }) => {
  return (
    <Button
      $primary={primary}
      whileHover={{ 
        scale: 1.03,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 30
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton; 