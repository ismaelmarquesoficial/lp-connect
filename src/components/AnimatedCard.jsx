import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, ${colors.primary}20, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const AnimatedCard = ({ children, index = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1 
        }
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default AnimatedCard; 