import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import ScrollReveal from './ScrollReveal';

const SliderContainer = styled(motion.div)`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;

  @media (max-width: 1200px) {
    padding: 4rem 4rem 8rem;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  position: relative;
  padding: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-50%);
    z-index: 0;
  }
`;

const TimelineDot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$active ? colors.primary : 'rgba(255, 255, 255, 0.2)'};
  border: 2px solid ${props => props.$active ? colors.primary : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.2);
    background: ${colors.primary};
    border-color: ${colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100%;
    right: -100%;
    height: 2px;
    background: ${props => props.$active ? colors.primary : 'transparent'};
    transform: translateY(-50%);
    z-index: -1;
    transition: background-color 0.3s ease;
  }
`;

const TimelineProgress = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  height: 2px;
  background: ${colors.primary};
  transform: translateY(-50%);
  z-index: 0;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(20, 0, 10, 0.3);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(
      90deg,
      ${colors.primary}90,
      ${colors.primary},
      ${colors.primary}90
    );
    border-radius: inherit;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.9;
  }

  &:hover::before {
    background: linear-gradient(
      90deg,
      ${colors.primary},
      ${colors.primaryLight},
      ${colors.primary}
    );
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255,255,255,0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const TestimonialCard = styled(motion.div)`
  flex: 0 0 100%;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '"';
    position: absolute;
    top: -1rem;
    left: 0;
    font-size: 5rem;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Georgia', serif;
    line-height: 1;
    z-index: 0;
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeInQuote 0.5s ease forwards 0.3s;
  }

  @keyframes fadeInQuote {
    to {
      opacity: 0.5;
      transform: translateY(0);
    }
  }
`;

const Quote = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 1;
  padding-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards 0.2s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards 0.4s;
`;

const AuthorAvatar = styled(motion.div)`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: 600;
  font-size: 1.3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shine 3s infinite;
  }

  @keyframes shine {
    to {
      left: 200%;
    }
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  color: ${colors.white};
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const AuthorRole = styled.p`
  color: ${colors.primary};
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.3px;
  opacity: 0.9;
`;

const SliderButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary};
    border-color: transparent;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 20px ${colors.primary}40;
  }

  i {
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: scale(1.2);
  }

  &.prev {
    left: -24px;
    &:hover i {
      transform: translateX(-2px);
    }
  }

  &.next {
    right: -24px;
    &:hover i {
      transform: translateX(2px);
    }
  }

  @media (max-width: 1200px) {
    &.prev { left: 10px; }
    &.next { right: 10px; }
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const Dot = styled(motion.button)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${props => props.$active ? colors.primary : 'rgba(255, 255, 255, 0.2)'};
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  padding: 0;

  &:hover {
    background: ${colors.primary};
    transform: scale(1.2);
  }

  ${props => props.$active && `
    width: 24px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
  `}
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  color: ${colors.white};
  font-weight: 700;
  letter-spacing: -0.5px;
  
  span {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight});
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.3px;
`;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.85,
    filter: 'blur(8px)',
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 1
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.85,
    filter: 'blur(8px)',
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  })
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      quote: "A IA da Conecta revolucionou nosso atendimento! Agora conseguimos atender 24/7 com respostas precisas e personalizadas.",
      name: "Maria Silva",
      role: "CEO da Fashion Store"
    },
    {
      quote: "Incrível como a IA entende o contexto e fornece respostas relevantes. Nossos clientes adoram a rapidez no atendimento!",
      name: "João Santos",
      role: "Gerente de E-commerce"
    },
    {
      quote: "Desde que implementamos a Conecta.IA, nossas vendas aumentaram em 40%. O melhor investimento que fizemos!",
      name: "Ana Costa",
      role: "Diretora Comercial"
    }
  ];

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  }, [testimonials.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  useEffect(() => {
    let interval;
    
    if (!isPaused) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, paginate]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const handleMouseMove = (e) => {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      sliderRef.current.style.setProperty('--x', `${x}%`);
      sliderRef.current.style.setProperty('--y', `${y}%`);
    };

    sliderRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SliderContainer>
            <SliderTrack
              ref={sliderRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="wait"
              >
                <TestimonialCard
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Quote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.2
                    }}
                  >
                    {testimonials[currentIndex].quote}
                  </Quote>
                  <Author
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.3
                    }}
                  >
                    <AuthorAvatar
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17
                      }}
                    >
                      {testimonials[currentIndex].name[0]}
                    </AuthorAvatar>
                    <AuthorInfo>
                      <AuthorName>{testimonials[currentIndex].name}</AuthorName>
                      <AuthorRole>{testimonials[currentIndex].role}</AuthorRole>
                    </AuthorInfo>
                  </Author>
                </TestimonialCard>
              </AnimatePresence>
            </SliderTrack>

            <SliderButton
              className="prev"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <i className="fas fa-chevron-left" />
            </SliderButton>

            <SliderButton
              className="next"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <i className="fas fa-chevron-right" />
            </SliderButton>

            <TimelineContainer>
              {testimonials.map((_, index) => (
                <TimelineDot
                  key={index}
                  $active={currentIndex === index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: currentIndex === index ? 1.2 : 1,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 17
                    }
                  }}
                />
              ))}
              <TimelineProgress
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: (currentIndex + 1) / testimonials.length,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              />
            </TimelineContainer>
          </SliderContainer>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default Testimonials;