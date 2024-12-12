import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container, Grid } from './layout/Section';
import AnimatedIcon from './AnimatedIcon';
import ScrollReveal from './ScrollReveal';

const BenefitsGrid = styled(Grid)`
  padding: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const BenefitCard = styled(motion.div)`
  border: 1px solid ${colors.primary}40;
  border-radius: 30px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(
      45deg,
      transparent,
      ${colors.primary}40,
      ${colors.primary}60,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    animation: borderAnimation 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    animation: borderAnimation 2s linear infinite;
  }

  @keyframes borderAnimation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const BenefitContent = styled.div`
  position: relative;
  z-index: 2;
  transform: translateZ(30px);
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.white};
  margin: 1.5rem 0 1rem;
  transition: color 0.3s ease;

  ${BenefitCard}:hover & {
    color: ${colors.primary};
    text-shadow: 0 0 10px ${colors.primary}40;
  }
`;

const BenefitDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  ${BenefitCard}:hover & {
    color: ${colors.white};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  color: ${colors.white};
  
  span {
    color: ${colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${colors.primary};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: ${colors.primaryLight};
      text-shadow: 0 0 15px ${colors.primary}40;
    }
  }
`;

const AdditionalBenefits = () => {
  const benefits = [
    {
      icon: "fas fa-headset",
      title: "Suporte Direto no WhatsApp",
      description: "Nossa equipe está sempre disponível para ajudar você diretamente pelo WhatsApp."
    },
    {
      icon: "fas fa-sliders-h",
      title: "Sistema Flexível e Personalizável",
      description: "Adapte o sistema às necessidades únicas do seu negócio."
    },
    {
      icon: "fas fa-coins",
      title: "O Melhor Custo-Benefício",
      description: "Você tem acesso à tecnologia de ponta pelo menor preço do mercado."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Segurança e Confiabilidade",
      description: "A integração oficial com o WhatsApp garante que sua operação esteja sempre protegida."
    },
    {
      icon: "fas fa-chart-bar",
      title: "Escalabilidade Garantida",
      description: "Cresça sem preocupações, atendendo cada vez mais clientes com o mesmo sistema."
    },
    {
      icon: "fas fa-star",
      title: "O Mais Completo",
      description: "Multiatendimento, integração oficial, disparos em massa, gerenciamento de grupos e CRM em um único lugar."
    }
  ];

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SectionTitle>
            Benefícios <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Adicionais
            </motion.span>
          </SectionTitle>
        </ScrollReveal>
        
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <BenefitCard
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <BenefitContent>
                  <AnimatedIcon 
                    icon={benefit.icon}
                    size="70px"
                    iconSize="2rem"
                    hover={true}
                    pulse={true}
                    rotate={true}
                    rounded={true}
                  />
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </ScrollReveal>
          ))}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

export default AdditionalBenefits; 