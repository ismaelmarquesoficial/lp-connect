import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin: -20px auto;
  width: fit-content;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${colors.primary};
  border-radius: 50%;
  animation: ${float} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  cursor: pointer;

  &:hover {
    background: ${colors.white};
  }
`;

const DotsTransition = () => (
  <Container>
    <Dot $delay={0} />
    <Dot $delay={0.2} />
    <Dot $delay={0.4} />
  </Container>
);

export default DotsTransition; 