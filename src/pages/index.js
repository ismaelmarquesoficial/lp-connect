'use client';

import styled from 'styled-components';
import Header from '../components/Header';
import ChatSimulation from '../components/ChatSimulation';
import BenefitsSection from '../components/BenefitsSection';
import AdditionalBenefits from '../components/AdditionalBenefits';
import ExclusiveBonus from '../components/ExclusiveBonus';
import Testimonials from '../components/Testimonials';
import QuickImplementation from '../components/QuickImplementation';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import RobotTransition from '../components/transitions/RobotTransition';
import ChartTransition from '../components/transitions/ChartTransition';
import GiftTransition from '../components/transitions/GiftTransition';
import MessageTransition from '../components/transitions/MessageTransition';
import RocketTransition from '../components/transitions/RocketTransition';
import PriceTransition from '../components/transitions/PriceTransition';
import FooterTransition from '../components/transitions/FooterTransition';
import ScrollToTop from '../components/ScrollToTop';

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

export default function Home() {
  return (
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
        <ScrollToTop />
      </MainContent>
    </PageContainer>
  );
} 