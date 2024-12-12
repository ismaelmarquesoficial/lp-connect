import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const OverlayStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(255,0,0,0.2) 100%);
  z-index: 1;
`;

const ParallaxContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

// Você pode adicionar mais imagens e fazer um carrossel automático
const images = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', // IA
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', // Código
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa'  // Tecnologia
];

const ParallaxBackground = () => {
  return (
    <ParallaxContainer>
      <Parallax
        blur={0}
        bgImage={images[0]}
        bgImageAlt="background"
        strength={200}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute'
        }}
      >
        <OverlayStyle />
      </Parallax>
    </ParallaxContainer>
  );
};

export default ParallaxBackground; 