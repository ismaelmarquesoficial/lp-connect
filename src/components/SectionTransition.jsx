import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../styles/colors';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const TransitionContainer = styled.div`
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  z-index: 2;
`;

const FloatingElement = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    .orbit {
      animation-play-state: paused;
    }
    
    .icon {
      color: ${colors.white};
      border-color: ${colors.white};
    }
  }
`;

const OrbitingDots = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${colors.primary};
    animation: ${rotate} 3s linear infinite;
    animation-delay: -1.5s;
    opacity: 0.5;
  }

  &::before {
    top: -20px;
    animation: ${rotate} 2s linear infinite;
  }

  &::after {
    bottom: -20px;
    animation-direction: reverse;
  }
`;

const MainIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
  transition: all 0.3s ease;
  background: transparent;

  i {
    animation: ${pulse} 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 40px;
    background: linear-gradient(to bottom, ${colors.primary}, transparent);
    bottom: -42px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SectionTransition = ({ icon = "fas fa-chevron-down", onClick }) => {
  return (
    <TransitionContainer>
      <FloatingElement onClick={onClick}>
        <OrbitingDots className="orbit" />
        <MainIcon className="icon">
          <i className={icon}></i>
        </MainIcon>
      </FloatingElement>
    </TransitionContainer>
  );
};

export default SectionTransition; 