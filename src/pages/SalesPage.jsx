import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import colors from '../styles/colors';
import Header from '../components/Header';
import ChatSimulation from '../components/ChatSimulation';
import BenefitsSection from '../components/BenefitsSection';
import AdditionalBenefits from '../components/AdditionalBenefits';
import ExclusiveBonus from '../components/ExclusiveBonus';
import Testimonials from '../components/Testimonials';
import QuickImplementation from '../components/QuickImplementation';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import RobotTransition from '../components/transitions/RobotTransition';
import ChartTransition from '../components/transitions/ChartTransition';
import GiftTransition from '../components/transitions/GiftTransition';
import MessageTransition from '../components/transitions/MessageTransition';
import RocketTransition from '../components/transitions/RocketTransition';
import PriceTransition from '../components/transitions/PriceTransition';
import FooterTransition from '../components/transitions/FooterTransition';
import Clients from '../components/Clients';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(139, 69, 19, 0.1);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #C2273C, #8B4513);
    border-radius: 5px;
    border: 2px solid transparent;
    background-clip: content-box;
    
    &:hover {
      background: linear-gradient(45deg, #E63946, #A0522D);
    }
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
 background: rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(
        circle at top right,
        rgba(194, 39, 60, 0.08),
        transparent 60%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(194, 39, 60, 0.05),
        transparent 60%
      );
    z-index: 1;
  }

  &::after {
    content: '';
    position: fixed;
    inset: 0;
    background: url('/noise.png') repeat;
    opacity: 0.02;
    z-index: 2;
    pointer-events: none;
  }
`;

const MainContent = styled.main`
  position: relative;
  z-index: 3;

  section {
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);

    &:nth-child(odd)::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }
  }
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.primary};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: ${colors.primaryLight};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(45deg, ${colors.primary}, ${colors.primaryLight});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px #C2273C; }
  50% { box-shadow: 0 0 20px #C2273C, 0 0 30px #8B4513; }
  100% { box-shadow: 0 0 5px #C2273C; }
`;

const TimelineContainer = styled.div`
  position: fixed;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

const TimelineLine = styled(motion.div)`
  width: 3px;
  height: 100%;
  background: rgba(139, 69, 19, 0.2);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, rgba(194, 39, 60, 0.1), rgba(139, 69, 19, 0.1));
    animation: ${glow} 3s infinite;
  }
`;

const TimelineProgress = styled(motion.div)`
  width: 3px;
  background: linear-gradient(180deg, #C2273C, #8B4513);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  transform-origin: top;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(194, 39, 60, 0.5);
`;

const TimelineDot = styled(motion.div)`
  width: ${props => props.active ? '16px' : '12px'};
  height: ${props => props.active ? '16px' : '12px'};
  border-radius: 50%;
  background: ${props => props.active ? '#C2273C' : 'rgba(139, 69, 19, 0.3)'};
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.active ? '#fff' : 'transparent'};
  animation: ${props => props.active ? pulse : 'none'} 2s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(194, 39, 60, 0.2), transparent);
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '${props => props.label}';
    position: absolute;
    left: 35px;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.8);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    color: white;
    opacity: 0;
    transition: all 0.3s ease;
    border: 1px solid rgba(194, 39, 60, 0.3);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    opacity: 1;
    left: 45px;
  }
`;

const Timeline = ({ sections }) => {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const section = document.querySelectorAll('section')[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <TimelineContainer>
      <TimelineLine />
      <TimelineProgress 
        style={{ height: progressHeight }}
        initial={{ height: '0%' }}
        animate={{ height: progressHeight }}
        transition={{ duration: 0.2 }}
      />
      {sections.map((section, index) => (
        <TimelineDot
          key={index}
          label={section}
          active={index === activeSection}
          style={{ 
            top: `${(index / (sections.length - 1)) * 100}%`,
            scale: index === activeSection ? 1.2 : 1
          }}
          onClick={() => scrollToSection(index)}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: index === activeSection ? 1.2 : 1,
            transition: { duration: 0.3 }
          }}
        />
      ))}
    </TimelineContainer>
  );
};

const SalesPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const sections = [
    'Início',
    'Benefícios',
    'Recursos',
    'Bônus',
    'Clientes',
    'Depoimentos',
    'Implementação',
    'Preços'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 500); // Mostra o botão após rolar 500px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ParallaxProvider>
      <GlobalStyle />
      <PageContainer>
        <Timeline sections={sections} />
        <MainContent>
          <Header />
          <ChatSimulation />
          <RobotTransition />
          <section id="benefits-section">
            <BenefitsSection />
          </section>
          <ChartTransition />
          <AdditionalBenefits />
          <GiftTransition />
          <section id="bonus-section">
            <ExclusiveBonus />
          </section>
          <MessageTransition />
          <Clients />
          <section id="testimonials-section">
            <Testimonials />
          </section>
          <RocketTransition />
          <section id="implementation-section">
            <QuickImplementation />
          </section>
          <PriceTransition />
          <section id="pricing-section">
            <PricingSection />
          </section>
          <FooterTransition />
          <Footer />
          
          <AnimatePresence>
            {showScrollButton && (
              <ScrollToTopButton
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-arrow-up" />
              </ScrollToTopButton>
            )}
          </AnimatePresence>
        </MainContent>
      </PageContainer>
    </ParallaxProvider>
  );
};

export default SalesPage; 