import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 4rem 0;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.5);
  
`;

export const Container = styled.div`
  max-width: ${props => props.$narrow ? '1200px' : '1400px'};
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.$gap || '2rem'};
  align-items: ${props => props.$alignItems || 'start'};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'space-between'};
  align-items: ${props => props.$align || 'center'};
  gap: ${props => props.$gap || '2rem'};
  flex-wrap: ${props => props.$wrap || 'wrap'};
`;

export const Spacing = styled.div`
  height: ${props => props.$height || '2rem'};
`; 