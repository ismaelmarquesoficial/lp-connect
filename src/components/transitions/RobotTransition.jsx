import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const FloatingRobot = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${colors.primary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
  margin: 0px auto;
  margin-top: 40px;
  cursor: pointer;
  transform: rotate(45deg);
  position: relative;
  z-index: 50;

  i {
    transform: rotate(-45deg);
  }

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
  }
`;

const RobotTransition = () => (
  <FloatingRobot>
    <i className="fas fa-robot"></i>
  </FloatingRobot>
);

export default RobotTransition; 