import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import ScrollReveal from './ScrollReveal';

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  color: ${colors.white};
  margin-bottom: 0.5rem;
  
  span {
    color: ${colors.primary};
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  text-align: center;
  color: ${colors.whiteTransparent};
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PricingCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  max-width: 400px;
  margin: 0 auto;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(
      90deg,
      ${colors.primary}60,
      ${colors.primary}80,
      ${colors.primary}60
    );
    border-radius: inherit;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.8;
  }

  &:hover::before {
    background: linear-gradient(
      90deg,
      ${colors.primary}80,
      ${colors.primary},
      ${colors.primary}80
    );
    opacity: 1;
  }

  ${props => props.featured && `
    &::before {
      background: linear-gradient(
        90deg,
        ${colors.primary}80,
        ${colors.primary},
        ${colors.primary}80
      );
      opacity: 1;
    }
  `}
`;

const PriceTag = styled.div`
  text-align: center;
  margin: 1rem 0 1.5rem;
  position: relative;

  .old-price {
    color: ${colors.whiteTransparent};
    font-size: 1rem;
    text-decoration: line-through;
    margin-bottom: 0.3rem;
    opacity: 0.7;
  }

  .discount {
    background: ${colors.primary};
    color: ${colors.white};
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 0.8rem;
    font-weight: 700;
    box-shadow: 0 4px 15px ${colors.primary}50;
  }

  .current-price {
    font-size: 2.8rem;
    font-weight: 800;
    
    span {
      font-size: 1rem;
      opacity: 0.9;
      font-weight: 600;
      margin-left: 0.2rem;
    }
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 0.3rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 180px));
  gap: 0.6rem;
  margin: 1rem 0;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 180px);
    gap: 0.5rem;
  }
`;

const FeatureItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  .icon {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primary};
    font-size: 1rem;
    margin: 0 auto 0.4rem;
    transition: all 0.3s ease;
  }

  .title {
    font-weight: 600;
    color: ${colors.white};
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
  }

  .description {
    font-size: 0.75rem;
    color: ${colors.whiteTransparent};
    line-height: 1.2;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.05);
    border-color: ${colors.primary}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .icon {
      background: ${colors.primary};
      color: white;
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

const PricingButton = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  background: ${colors.primary};
  color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 25%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 75%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &::after {
    transform: translateX(100%);
    background: linear-gradient(
      -45deg,
      transparent 25%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 75%
    );
  }

  i {
    font-size: 1.2rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .whatsapp-icon {
    animation: float 2s ease-in-out infinite;
  }

  &:hover {
    background: ${colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: 
      0 5px 15px rgba(194, 39, 60, 0.3),
      0 0 0 2px ${colors.primary}40;

    &::before {
      transform: translateX(100%);
    }

    &::after {
      transform: translateX(-100%);
    }

    i {
      transform: scale(1.2) rotate(10deg);
      color: white;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  font-weight: 900;
  span {
    color: ${colors.primary};
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const PricingSection = () => {
  const features = [
    {
      icon: "fas fa-robot",
      title: "Atendimento 24/7",
      description: "Respostas automáticas"
    },
    {
      icon: "fas fa-brain",
      title: "IA Inteligente",
      description: "Respostas contextuais"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      description: "Integração direta"
    },
    {
      icon: "fas fa-chart-line",
      title: "Métricas",
      description: "Relatórios completos"
    },
    {
      icon: "fas fa-headset",
      title: "Suporte",
      description: "Atendimento VIP"
    },
    {
      icon: "fas fa-rocket",
      title: "Setup",
      description: "Configuração inclusa"
    }
  ];

  return (
    <Section id="pricing-section">
      <Container>
        <ScrollReveal>
          <Title>
            Invista no Futuro do seu Atendimento<span>.</span>
          </Title>
          <Subtitle>
            Transforme seu WhatsApp em uma central inteligente
          </Subtitle>
        </ScrollReveal>

        <Grid style={{ justifyContent: 'center' }}>
          <ScrollReveal>
            <PricingCard
              featured
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TitleContainer>
                <PlanTitle>Plano Completo</PlanTitle>
              </TitleContainer>
              <PriceTag>
                <div className="discount">50% OFF</div>
                <div className="old-price">R$ 597<span>/mês</span></div>
                <div className="price-wrapper">
                  <motion.div 
                    className="current-price"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    R$ 297<span>/mês</span>
                  </motion.div>
                </div>
              </PriceTag>
              <FeatureList>
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="icon">
                      <i className={feature.icon} />
                    </div>
                    <div className="title">{feature.title}</div>
                    <div className="description">{feature.description}</div>
                  </FeatureItem>
                ))}
              </FeatureList>
              <PricingButton
                as="a"
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Conecta%20IA"
                target="_blank"
                rel="noopener noreferrer"
                featured
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Quero transformar meu WhatsApp</span>
                <i className="fab fa-whatsapp whatsapp-icon"></i>
              </PricingButton>
            </PricingCard>
          </ScrollReveal>
        </Grid>
      </Container>
    </Section>
  );
};

export default PricingSection; 