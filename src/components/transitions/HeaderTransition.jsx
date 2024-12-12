import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
  100% { transform: translateY(0) scale(1); }
`;

const pulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -30px auto;
  position: relative;
  z-index: 10;
`;

const FloatingElement = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${colors.primary};
    animation: ${pulse} 2s ease-in-out infinite;
  }

  &::before {
    left: -15px;
    animation-delay: -0.5s;
  }

  &::after {
    right: -15px;
    animation-delay: -1s;
  }

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
    
    &::before, &::after {
      background: ${colors.white};
    }
  }
`;

const HeaderTransition = () => (
  <Container>
    <FloatingElement>
      <i className="fas fa-brain"></i>
    </FloatingElement>
  </Container>
);

export default HeaderTransition; 