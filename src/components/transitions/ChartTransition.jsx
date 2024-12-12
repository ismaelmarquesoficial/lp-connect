import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
  100% { transform: translateY(0) scale(1); }
`;

const FloatingChart = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.4rem;
  animation: ${float} 4s ease-in-out infinite;
  margin: -20px auto;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
  }
`;

const ChartTransition = () => (
  <FloatingChart>
    <i className="fas fa-chart-line"></i>
  </FloatingChart>
);

export default ChartTransition; 