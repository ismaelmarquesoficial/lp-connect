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

const Results = () => {
  const results = [
    {
      number: "70",
      suffix: "%",
      label: "Aumento em Vendas",
      description: "Média de crescimento nos primeiros 3 meses"
    },
    {
      number: "24/7",
      label: "Disponibilidade",
      description: "Atendimento automático todos os dias"
    },
    {
      number: "5",
      suffix: "x",
      label: "Mais Eficiente",
      description: "Aumento na capacidade de atendimento"
    },
    {
      number: "15",
      suffix: "min",
      label: "Setup Rápido",
      description: "Implementação simples e descomplicada"
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
          <SectionTitle>
            Resultados <motion.span>Comprovados</motion.span>
          </SectionTitle>
          <SectionSubtitle>
            Números que comprovam a eficiência da nossa solução
          </SectionSubtitle>
        </ScrollReveal>

        <ResultsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {results.map((result, index) => (
            <ResultCard
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Number
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: index * 0.1
                }}
              >
                {result.number}
                {result.suffix && <span>{result.suffix}</span>}
              </Number>
              <Label>{result.label}</Label>
              <Description>{result.description}</Description>
            </ResultCard>
          ))}
        </ResultsGrid>
      </Container>
    </Section>
  );
};

export default Results; 