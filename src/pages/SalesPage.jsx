import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  outline: none;

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

const SalesPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 500);
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
                aria-label="Voltar ao topo"
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