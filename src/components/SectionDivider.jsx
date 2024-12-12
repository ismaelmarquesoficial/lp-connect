import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const DividerContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${colors.primary}20,
    ${colors.primary},
    ${colors.primary}20,
    transparent
  );
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  position: relative;
  z-index: 1;

  i {
    transform: translateY(1px);
  }
`;

const SectionDivider = ({ icon = "fas fa-star" }) => {
  return (
    <DividerContainer>
      <Line />
      <Icon>
        <i className={icon}></i>
      </Icon>
    </DividerContainer>
  );
};

export default SectionDivider; 