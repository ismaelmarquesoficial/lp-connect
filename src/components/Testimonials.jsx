import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import ScrollReveal from './ScrollReveal';

const SliderContainer = styled(motion.div)`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
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
    left: -80px;
    &:hover i {
      transform: translateX(-2px);
    }
  }

  &.next {
    right: -80px;
    &:hover i {
      transform: translateX(2px);
    }
  }

  @media (max-width: 1200px) {
    &.prev { left: -60px; }
    &.next { right: -60px; }
  }

  @media (max-width: 992px) {
    &.prev { left: -40px; }
    &.next { right: -40px; }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: "Transformou completamente nosso atendimento! A automação inteligente nos permitiu triplicar nossa capacidade de resposta.",
      author: "Maria Silva",
      role: "Loja Virtual",
      initial: "M"
    },
    {
      quote: "Agora conseguimos atender muito mais clientes sem perder qualidade e ainda aumentamos nossas vendas em 70%.",
      author: "João Santos",
      role: "E-commerce",
      initial: "J"
    },
    {
      quote: "O suporte é excepcional. Sempre que precisamos de ajuda, a equipe está pronta para nos atender pelo WhatsApp.",
      author: "Ana Costa",
      role: "Agência Digital",
      initial: "A"
    },
    {
      quote: "A melhor decisão que tomamos foi implementar o Conecta.ia. O retorno sobre o investimento foi imediato.",
      author: "Pedro Oliveira",
      role: "Loja de Roupas",
      initial: "P"
    },
    {
      quote: "Custo-benefício imbatível. Outras soluções custavam 3x mais e ofereciam menos recursos.",
      author: "Carlos Mendes",
      role: "Prestador de Serviços",
      initial: "C"
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotateY: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    let interval;
    
    if (!isPaused) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000); // Muda a cada 5 segundos
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, isPaused]);

  useEffect(() => {
    const track = document.querySelector(SliderTrack);
    if (!track) return;

    const handleMouseMove = (e) => {
      const rect = track.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      track.style.setProperty('--x', `${x}%`);
      track.style.setProperty('--y', `${y}%`);
    };

    track.addEventListener('mousemove', handleMouseMove);
    return () => track.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SectionTitle>
            Depoimentos de <motion.span>Clientes</motion.span>
          </SectionTitle>
          <SectionSubtitle>
            Veja o que dizem as empresas que já transformaram seu atendimento
          </SectionSubtitle>
        </ScrollReveal>

        <SliderContainer
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <SliderButton
            className="prev"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-left" />
          </SliderButton>

          <AnimatePresence initial={false} custom={direction}>
            <SliderTrack>
              <TestimonialCard
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Quote>{testimonials[currentIndex].quote}</Quote>
                <Author>
                  <AuthorAvatar
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {testimonials[currentIndex].initial}
                  </AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>{testimonials[currentIndex].author}</AuthorName>
                    <AuthorRole>{testimonials[currentIndex].role}</AuthorRole>
                  </AuthorInfo>
                </Author>
              </TestimonialCard>
            </SliderTrack>
          </AnimatePresence>

          <SliderButton
            className="next"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-chevron-right" />
          </SliderButton>

          <SliderDots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                $active={currentIndex === index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </SliderDots>
        </SliderContainer>
      </Container>
    </Section>
  );
};

export default Testimonials; 