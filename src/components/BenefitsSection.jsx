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
  gap: 3rem;
`;

const BenefitCard = styled(motion.div)`
  border: 1px solid ${colors.primary}40;
  border-radius: 25px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, ${colors.primary}20, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
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
`;

const BenefitDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
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
  }

  &:hover span::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "fas fa-clock",
      title: "Atendimento Rápido e Preciso 24/7",
      description: "Respostas instantâneas para seus clientes, mesmo fora do horário comercial."
    },
    {
      icon: "fas fa-chart-line",
      title: "Aumento de Vendas",
      description: "Nossa IA não apenas responde, mas também conduz o cliente até a finalização da compra."
    },
    {
      icon: "fas fa-piggy-bank",
      title: "Redução de Custos",
      description: "Diminua a necessidade de uma equipe enorme, otimizando o atendimento."
    },
    {
      icon: "fas fa-smile",
      title: "Melhor Experiência do Cliente",
      description: "Respostas personalizadas e engajamento constante deixam os clientes mais satisfeitos."
    },
    {
      icon: "fas fa-cogs",
      title: "Processos Automatizados",
      description: "Geração automática de links de pagamento, gerenciamento de pedidos e integração com CRM."
    },
    {
      icon: "fas fa-rocket",
      title: "Eficiência para Altas Demandas",
      description: "Perfeito para empresas que lidam com um grande volume de mensagens diárias."
    }
  ];

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SectionTitle>
            Por que escolher nossa <span>solução com IA</span> no WhatsApp?
          </SectionTitle>
        </ScrollReveal>
        
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <BenefitCard
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <BenefitContent>
                  <AnimatedIcon 
                    icon={benefit.icon}
                    size="70px"
                    iconSize="1.8rem"
                    hover={true}
                    pulse={true}
                    rotate={true}
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

export default BenefitsSection; 