import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-20px) rotate(45deg); }
  100% { transform: translateY(0) rotate(45deg); }
`;

const FloatingRocket = styled.div`
  width: 40px;
  height: 40px;

  color: ${colors.primary};
  font-size: 1.4rem;
  animation: ${float} 3s ease-in-out infinite;
  margin: 0px auto;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
  }
`;

const RocketTransition = () => (
  <FloatingRocket>
    <i className="fas fa-rocket"></i>
  </FloatingRocket>
);

export default RocketTransition; 