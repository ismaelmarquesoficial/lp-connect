import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: relative;
  perspective: 1000px;
`;

const MouseTracker = ({ children, intensity = 20 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovered || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x, y });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovered]);

  return (
    <Container
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateY: mousePosition.x * intensity,
        rotateX: -mousePosition.y * intensity,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {children}
    </Container>
  );
};

export default MouseTracker; 