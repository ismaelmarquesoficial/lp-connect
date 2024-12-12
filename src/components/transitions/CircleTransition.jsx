import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const FloatingCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
  margin: -20px auto;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
  }
`;

const CircleTransition = () => (
  <FloatingCircle>
    <i className="fas fa-chevron-down"></i>
  </FloatingCircle>
);

export default CircleTransition; 