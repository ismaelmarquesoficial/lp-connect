import styled from 'styled-components';

const Spacer = styled.div`
  height: 100px; // Espaço para a animação
  margin-top: -50px; // Ajusta a sobreposição
  position: relative;
  z-index: 2; // Garante que fique acima das seções
`;

export default Spacer; 