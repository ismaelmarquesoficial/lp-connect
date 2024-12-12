import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const FloatingArrow = styled.div`
  color: ${colors.primary};
  font-size: 2rem;
  animation: ${float} 4s ease-in-out infinite;
  margin: -20px auto;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${colors.white};
  }
`;

const ArrowTransition = () => (
  <FloatingArrow>
    <i className="fas fa-angle-double-down"></i>
  </FloatingArrow>
);

export default ArrowTransition; 