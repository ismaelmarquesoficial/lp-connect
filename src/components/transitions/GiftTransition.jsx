import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(-10deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const FloatingGift = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${colors.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
  margin: 00px auto;
  cursor: pointer;
background: rgba(0, 0, 0, 0.5);
  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
  }
`;

const GiftTransition = () => (
  <FloatingGift>
    <i className="fas fa-gift"></i>
  </FloatingGift>
);

export default GiftTransition; 