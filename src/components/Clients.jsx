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

const ClientLogos = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(41, 2, 21, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const ClientLogo = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid ${colors.primary}20;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${colors.primary};
    transform: translateY(-5px);
  }
`;
/*
const ClientName = styled.h3`
  color: ${colors.white};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
*/

const ClientCategory = styled.p`
  color: ${colors.primary};
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Clients = () => {
  
  const featuredClients = [
    {
      name: "Francisca Joias",
      category: "Joalheria",
      logo: "fas fa-gem"
    },
    {
      name: "Elite X Burger",
      category: "Restaurante",
      logo: "fas fa-hamburger"
    },
    {
      name: "Clinica Vitalis",
      category: "Saúde",
      logo: "fas fa-heartbeat"
    },
    {
      name: "Agramax",
      category: "Agronegócio",
      logo: "fas fa-leaf"
    },
    {
      name: "Mulher Mania",
      category: "Moda",
      logo: "fas fa-tshirt"
    }
  ];


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

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SectionTitle>
            Nossos <motion.span>Clientes</motion.span>
          </SectionTitle>
          <SectionSubtitle>
            Empresas que já transformaram seu atendimento com nossa solução
          </SectionSubtitle>
        </ScrollReveal>

        {/* <ClientLogos>
          {featuredClients.map((client, index) => (
            <ClientLogo
              key={index}
              variants={logoVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.i 
                className={client.logo}
                style={{ 
                  fontSize: "2rem",
                  color: colors.primary,
                  marginBottom: "1rem"
                }}
                whileHover={{ rotate: 10 }}
              />
              <ClientName>{client.name}</ClientName>
              <ClientCategory>{client.category}</ClientCategory>
            </ClientLogo>
          ))}
        </ClientLogos> */}

        <ResultsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clientStats.map((stat, index) => (
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
                {stat.number}
                {stat.suffix && <span>{stat.suffix}</span>}
              </Number>
              <Label>{stat.label}</Label>
              <Description>{stat.description}</Description>
            </ResultCard>
          ))}
        </ResultsGrid>
      </Container>
    </Section>
  );
};

export default Clients; 