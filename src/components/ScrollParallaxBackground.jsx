import React, { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(255,0,0,0.2) 100%);
  z-index: 2;
`;

const images = [
  '/images/bg-tech.jpg',
  '/images/bg-tech-2.jpg',
  '/images/bg-tech-3.jpg'
];

const ScrollParallaxBackground = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
      <ParallaxBanner style={{ height: '100%' }}>
        {images.map((image, index) => (
          <ParallaxBannerLayer
            key={image}
            image={image}
            speed={-20}
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <ParallaxBannerLayer
          speed={-10}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,0,0,0.1) 0%, transparent 70%)',
            backgroundSize: '200% 200%',
            backgroundPosition: 'center',
          }}
        />
        <Overlay />
      </ParallaxBanner>
    </BackgroundContainer>
  );
};

export default ScrollParallaxBackground; 