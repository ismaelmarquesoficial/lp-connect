import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import ScrollReveal from './ScrollReveal';

const ResultsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const ResultCard = styled(motion.div)`
  background: rgba(41, 2, 21, 0.3);
  border: 2px solid ${colors.primary}40;
  border-radius: 25px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 25px;
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
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Number = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 1rem;
  line-height: 1;
  
  span {
    font-size: 2rem;
    opacity: 0.8;
  }
`;

const Label = styled.p`
  font-size: 1.2rem;
  color: ${colors.white};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${colors.whiteTransparent};
  line-height: 1.5;
`;

const Clients = () => {
  const clientStats = [
    {
      number: "100",
      suffix: "+",
      label: "Clientes Ativos",
      description: "Empresas usando nossa solução"
    },
    {
      number: "100k",
      suffix: "+",
      label: "Mensagens/Mês",
      description: "Atendimentos automatizados"
    },
    {
      number: "98",
      suffix: "%",
      label: "Satisfação",
      description: "Clientes satisfeitos com o serviço"
    },
    {
      number: "50",
      suffix: "K+",
      label: "Vendas Geradas",
      description: "Conversões automáticas por mês"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <ResultsGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {clientStats.map((stat, index) => (
              <ResultCard key={index} variants={itemVariants}>
                <Number>
                  {stat.number}
                  <span>{stat.suffix}</span>
                </Number>
                <Label>{stat.label}</Label>
                <Description>{stat.description}</Description>
              </ResultCard>
            ))}
          </ResultsGrid>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default Clients; 