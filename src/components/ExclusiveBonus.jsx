import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import AnimatedIcon from './AnimatedIcon';
import ScrollReveal from './ScrollReveal';

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
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

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${colors.primary}40,
      ${colors.primary},
      ${colors.primary}40,
      transparent
    );
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.$index % 2 === 0 ? 'flex-start' : 'flex-end'};
  padding: 2rem 0;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 80px;
  }
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: ${colors.primary};
  border-radius: 50%;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 2px solid ${colors.primary}40;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const BonusCard = styled(motion.div)`
  width: 45%;
  background: rgba(41, 2, 21, 0.3);
  border: 2px solid ${colors.primary}40;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;

  ${props => props.$featured && `
    border-color: ${colors.primary};
    background: rgba(194, 39, 60, 0.15);
    box-shadow: 0 0 30px ${colors.primary}30;

    &::after {
      content: 'Destaque';
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: ${colors.primary};
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: bold;
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BonusContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const BonusInfo = styled.div`
  flex: 1;
`;

const BonusTitle = styled.h3`
  font-size: 1.3rem;
  color: ${colors.white};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const BonusDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
`;

const ExclusiveBonus = () => {
  const bonuses = [
    {
      icon: "fas fa-users",
      title: "Multiatendimento",
      description: "Até 5 usuários simultâneos",
      featured: true
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Números Integrados",
      description: "Uso de 2 números de WhatsApp integrados"
    },
    {
      icon: "fas fa-paper-plane",
      title: "Disparo em Massa",
      description: "Envie mensagens para contatos e clientes com facilidade"
    },
    {
      icon: "fas fa-user-friends",
      title: "Gestão de Grupos",
      description: "Controle comunidades e promoções sem complicações"
    },
    {
      icon: "fas fa-database",
      title: "CRM Embutido",
      description: "Organize leads e acompanhe histórico de conversas"
    }
  ];

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SectionTitle>
            Bônus <motion.span>Exclusivos</motion.span>
          </SectionTitle>
          <SectionSubtitle>
            Aproveite recursos premium para potencializar ainda mais seus resultados
          </SectionSubtitle>
        </ScrollReveal>

        <TimelineContainer>
          {bonuses.map((bonus, index) => (
            <TimelineItem
              key={index}
              $index={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.2 
                }
              }}
              viewport={{ once: true }}
            >
              <TimelineDot />
              <BonusCard
                $featured={bonus.featured}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: index % 2 === 0 ? 5 : -5
                }}
              >
                <BonusContent>
                  <AnimatedIcon 
                    icon={bonus.icon}
                    size="50px"
                    iconSize="1.5rem"
                    rounded
                    hover={true}
                    pulse={true}
                  />
                  <BonusInfo>
                    <BonusTitle>{bonus.title}</BonusTitle>
                    <BonusDescription>{bonus.description}</BonusDescription>
                  </BonusInfo>
                </BonusContent>
              </BonusCard>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
    </Section>
  );
};

export default ExclusiveBonus; 