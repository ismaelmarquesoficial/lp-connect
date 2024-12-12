import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../colors';

const HeaderContainer = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LeftContent = styled(motion.div)``;

const RightContent = styled(motion.div)`
  background: ${colors.glassDark};
  border-radius: 30px;
  padding: 3.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid ${colors.glassEffect};
  box-shadow: ${colors.shadowDark};
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 5rem);
  margin-bottom: 2rem;
  line-height: 1.1;
  font-weight: 800;
  color: ${colors.white};
`;

const Highlight = styled(motion.span)`
  color: ${colors.primary};
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: ${colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const AnimatedHeader = ({ children }) => {
  return (
    <HeaderContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <LeftContent variants={itemVariants}>
        <Title>
          Transforme Seu WhatsApp em Uma{' '}
          <Highlight
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Central Inteligente
          </Highlight>
        </Title>
        {children}
      </LeftContent>
      <RightContent
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3>Principais Benefícios</h3>
        {/* ... lista de benefícios ... */}
      </RightContent>
    </HeaderContainer>
  );
};

export default AnimatedHeader; 