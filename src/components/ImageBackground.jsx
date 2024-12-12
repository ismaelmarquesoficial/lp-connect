import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: ${props => props.active ? 1 : 0};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(255,0,0,0.2) 100%);
  z-index: 1;
`;

const images = [
  '/path/to/your/image1.jpg',
  '/path/to/your/image2.jpg',
  '/path/to/your/image3.jpg'
];

const ImageBackground = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
      {images.map((image, index) => (
        <BackgroundImage
          key={image}
          image={image}
          active={index === currentImage}
        />
      ))}
      <Overlay />
    </BackgroundContainer>
  );
};

export default ImageBackground; 