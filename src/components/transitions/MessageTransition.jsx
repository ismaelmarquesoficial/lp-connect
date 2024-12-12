import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const FloatingMessage = styled.div`
  width: 45px;
  height: 35px;
  border: 2px solid ${colors.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.1rem;
  animation: ${float} 3s ease-in-out infinite;
  margin: 0px auto;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 15px;
    width: 10px;
    height: 10px;
    background: ${colors.primary};
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
    &::after {
      background: ${colors.white};
    }
  }
`;

const MessageTransition = () => (
  <FloatingMessage>
    <i className="fas fa-comments"></i>
  </FloatingMessage>
);

export default MessageTransition; 