import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Section, Container, Grid } from './layout/Section';
import colors from '../styles/colors';
import AnimatedButton from './AnimatedButton';
import { RiWhatsappFill } from 'react-icons/ri';
import { SiOpenai } from 'react-icons/si';
import { RiBrainFill } from 'react-icons/ri';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.6; }
  100% { transform: scale(1); opacity: 0.3; }
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const HeaderSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 0rem;
`;

const NavigationBar = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const Logo = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 700;
  cursor: pointer;
  
  span.conecta {
    color: ${colors.white};
  }
  
  span.ia {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${colors.whiteTransparent};
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.white};
    
    &::before {
      width: 80%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1rem;
    transform: translateY(-50%);
    width: 2px;
    height: 2px;
    background: ${colors.primary};
    border-radius: 50%;
    opacity: 0.5;
  }

  &:last-child::after {
    display: none;
  }
`;

const HeaderLeft = styled(motion.div)`
  max-width: 700px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    padding-top: 10rem;  
  }
`;

const HeaderRight = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
    animation: animate1 2s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${colors.primary}, transparent);
    animation: animate2 2s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  &:hover::before {
    animation-duration: 1s;
  }

  &:hover::after {
    animation-duration: 1s;
  }

  h3 {
    font-size: 1.6rem;
    color: white;
    margin-bottom: 2rem;
    font-weight: 600;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const HeaderContent = styled(Grid)`
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  &:hover ${HeaderLeft} {
    transform: perspective(1000px) rotateY(-5deg);
  }

  &:hover ${HeaderRight} {
    transform: perspective(1000px) rotateY(5deg);
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(3.8rem, 4vw, 4.2rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${colors.white};
  
  span {
    color: ${colors.primary};
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 3px;
      background: ${colors.primary};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: ${colors.primaryLight};
      text-shadow: 0 0 20px ${colors.primary}40;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 1.5vw, 1.3rem);
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  color: ${colors.whiteTransparent};
  line-height: 1.6;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  &:hover ${AnimatedButton} {
    filter: brightness(0.9);
    
    &:hover {
      filter: brightness(1.1);
      transform: translateY(-3px);
    }
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 0.3rem;
`;

const StatText = styled.div`
  color: ${colors.whiteTransparent};
  font-size: 1rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    
    ${StatNumber} {
      color: ${colors.primaryLight};
      text-shadow: 0 0 10px ${colors.primary}40;
    }
    
    ${StatText} {
      color: ${colors.white};
    }
  }
`;

const FeaturesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureIcon = styled(motion.div)`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;

  i {
    transition: transform 0.4s ease;
  }

  &:hover {
    i {
      transform: scale(1.2);
    }
  }
`;

const FeatureItem = styled(motion.li)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateX(8px) translateY(-2px) translateZ(10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: ${colors.primary}40;
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.15),
      inset 0 0 16px rgba(255, 255, 255, 0.05);

    ${FeatureIcon} {
      transform: translateZ(20px) scale(1.1) rotate(10deg);
      background: ${colors.primary};
      color: white;
      border-color: ${colors.primary};
      box-shadow: 0 0 20px ${colors.primary}40;
    }

    &::before {
      transform: translateX(100%);
    }
  }
`;

const FeatureRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureText = styled(motion.h4)`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.4rem;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureDescription = styled(motion.p)`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1 * index,
      ease: "easeOut"
    }
  })
};

const iconVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const FloatingIcon = styled.div`
  position: absolute;
  color: #DAA520;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  opacity: 0.6;
  transition: all 0.5s ease;
  filter: blur(6px);
  width: ${props => props.style?.width};
  height: ${props => props.style?.height};
  left: ${props => props.style?.left};
  top: ${props => props.style?.top};
  right: ${props => props.style?.right};
  bottom: ${props => props.style?.bottom};

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 25px rgba(218, 165, 32, 0.7));
  }
`;

const CircuitLine = styled.div`
  position: absolute;
  background: linear-gradient(90deg, transparent, #DAA520, transparent);
  height: 4px;
  width: ${props => props.style?.width};
  opacity: 0.4;
  animation: ${pulse} 4s linear infinite;
  animation-delay: ${props => props.$delay}s;
  filter: blur(4px);
  top: ${props => props.style?.top};
  left: ${props => props.style?.left};
  right: ${props => props.style?.right};
  bottom: ${props => props.style?.bottom};
  transform: ${props => props.style?.transform};
`;

const AITypingContainer = styled(motion.div)`
  background: rgba(194, 39, 60, 0.1);
  border: 1px solid ${colors.primary}40;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 300px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(194, 39, 60, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

const AIIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: ${colors.primary}20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.5rem;
`;

const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${colors.primary};
  border-radius: 50%;
  opacity: 0.6;
  animation: ${blink} 1.4s infinite;
  animation-delay: ${props => props.$delay}s;
`;

const TypingText = styled.div`
  color: ${colors.whiteTransparent};
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '|';
    position: absolute;
    right: -4px;
    animation: ${blink} 1s infinite;
  }
`;

const AITyping = () => {
  return (
    <AITypingContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AIIcon
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-robot" />
      </AIIcon>
      <div>
        <TypingText>IA processando sua mensagem</TypingText>
        <TypingIndicator>
          <Dot $delay={0} />
          <Dot $delay={0.2} />
          <Dot $delay={0.4} />
        </TypingIndicator>
      </div>
    </AITypingContainer>
  );
};

// Hook personalizado para tamanho responsivo
const useResponsiveSize = () => {
  const [size, setSize] = useState({
    iconSize: {
      whatsapp: { width: '100px', height: '100px' },
      openai: { width: '400px', height: '400px' },
      brain: { width: '130px', height: '130px' }
    },
    lineWidth: '300px'
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSize({
          iconSize: {
            whatsapp: { width: '40px', height: '40px' },
            openai: { width: '150px', height: '150px' },
            brain: { width: '50px', height: '50px' }
          },
          lineWidth: '100px'
        });
      } else if (width <= 768) {
        setSize({
          iconSize: {
            whatsapp: { width: '60px', height: '60px' },
            openai: { width: '200px', height: '200px' },
            brain: { width: '80px', height: '80px' }
          },
          lineWidth: '150px'
        });
      } else {
        setSize({
          iconSize: {
            whatsapp: { width: '100px', height: '100px' },
            openai: { width: '400px', height: '400px' },
            brain: { width: '130px', height: '130px' }
          },
          lineWidth: '300px'
        });
      }
    };

    handleResize(); // Executa na montagem
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

const Header = () => {
  const { iconSize, lineWidth } = useResponsiveSize();

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      y: -2,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const features = [
    {
      icon: "fas fa-clock",
      text: "Atendimento 24/7",
      description: "Respostas instantâneas a qualquer hora"
    },
    {
      icon: "fas fa-brain",
      text: "IA Inteligente",
      description: "Respostas personalizadas para cada cliente"
    },
    {
      icon: "fas fa-plug",
      text: "Múltiplas Integrações",
      description: "Conecte com suas ferramentas favoritas"
    },
    {
      icon: "fas fa-chart-line",
      text: "Aumento em Vendas",
      description: "Mais conversões automaticamente"
    }
  ];

  const stats = [
    { number: "24/7", text: "Online" },
    { number: "70%", text: "Vendas" },
    { number: "5x", text: "Eficiência" }
  ];

  const floatingIcons = [
    { 
      Icon: RiWhatsappFill, 
      style: { 
        left: '85%', 
        top: '15%', 
        ...iconSize.whatsapp
      }, 
      delay: 0 
    },
    { 
      Icon: SiOpenai, 
      style: { 
        left: '-12%', 
        top: '-3%', 
        ...iconSize.openai
      }, 
      delay: 1.5 
    },
    { 
      Icon: RiBrainFill, 
      style: { 
        left: '45%', 
        top: '70%', 
        ...iconSize.brain
      }, 
      delay: 0.8 
    }
  ];

  const circuitLines = [
    { 
      style: { 
        top: '30%', 
        left: '20%', 
        transform: 'rotate(45deg)', 
        width: lineWidth 
      }, 
      delay: 0 
    },
    { 
      style: { 
        top: '60%', 
        right: '25%', 
        transform: 'rotate(-30deg)', 
        width: lineWidth 
      }, 
      delay: 1 
    },
    { 
      style: { 
        bottom: '40%', 
        left: '40%', 
        transform: 'rotate(15deg)', 
        width: lineWidth 
      }, 
      delay: 0.5 
    }
  ];

  return (
    <HeaderSection>
      <NavigationBar
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <NavContainer>
          <Logo
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="conecta">Connect</span>
            <span className="ia">.ai</span>
          </Logo>
          <NavLinks>
            <NavLink
              onClick={() => handleScrollTo('benefits-section')}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Benefícios
            </NavLink>
            <NavLink
              onClick={() => handleScrollTo('bonus-section')}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Bônus Exclusivos
            </NavLink>
            <NavLink
              onClick={() => handleScrollTo('testimonials-section')}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Depoimentos
            </NavLink>
            <NavLink
              onClick={() => handleScrollTo('implementation-section')}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Implementação
            </NavLink>
            <NavLink
              onClick={() => handleScrollTo('pricing-section')}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Preços
            </NavLink>
          </NavLinks>
        </NavContainer>
      </NavigationBar>
      <FloatingElements>
        {floatingIcons.map((item, index) => (
          <FloatingIcon
            key={index}
            style={item.style}
            $delay={item.delay}
          >
            <item.Icon />
          </FloatingIcon>
        ))}
        
        {circuitLines.map((line, index) => (
          <CircuitLine
            key={index}
            style={line.style}
            $delay={line.delay}
          />
        ))}
      </FloatingElements>
      <Container>
        <HeaderContent>
          <HeaderLeft
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <MainTitle>
            Atenda, Conquiste e Venda no WhatsApp {' '}
              <span>IA de Última Geração</span>
            </MainTitle>
            <Subtitle>
              A Inteligência Artificial que acolhe, interage e atende o teu cliente de maneira totalmente 
              fluida e humanizada.
            </Subtitle>
            <StatsContainer>
              {stats.map((stat, index) => (
                <StatItem 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatText>{stat.text}</StatText>
                </StatItem>
              ))}
            </StatsContainer>
            <CTAContainer>
              <AnimatedButton 
                primary 
                onClick={() => handleScrollTo('pricing-section')}
              >
                Transforme Seu WhatsApp
              </AnimatedButton>
              <AITyping />
            </CTAContainer>
          </HeaderLeft>
          <HeaderRight
            initial={{ 
              opacity: 0,
              x: 50,
              rotateY: 20,
              scale: 0.9
            }}
            animate={{ 
              opacity: 1,
              x: 0,
              rotateY: 0,
              scale: 1
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut"
              }}
            >
              Principais Benefícios
            </motion.h3>
            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  initial={{ 
                    opacity: 0,
                    x: 30,
                    rotateY: 20
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    rotateY: 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FeatureRow>
                    <FeatureIcon
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <i className={feature.icon} />
                    </FeatureIcon>
                    <FeatureContent>
                      <FeatureText>{feature.text}</FeatureText>
                      <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureContent>
                  </FeatureRow>
                </FeatureItem>
              ))}
            </FeaturesList>
          </HeaderRight>
        </HeaderContent>
      </Container>
    </HeaderSection>
  );
};

export default Header; 