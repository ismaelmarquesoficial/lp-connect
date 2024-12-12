import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import AnimatedSection from './AnimatedSection';
import ParallaxEffect from './ParallaxEffect';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';
import { FaComments, FaCogs, FaRocket } from 'react-icons/fa';

const Section = styled.div`
  padding: 8rem 2rem 0rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const StepsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  padding: 3rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.primary}, transparent);
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    &::before {
      display: none;
    }
  }
`;

const Step = styled(motion.div)`
  flex: 1;
  position: relative;
  z-index: 1;
  background: rgba(41, 2, 21, 0.3);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${colors.primary};
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const StepIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.8rem;
  color: ${colors.white};
  position: relative;
  transform: translateZ(30px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border: 2px dashed ${colors.primaryLight};
    border-radius: 50%;
    animation: spin 20s linear infinite;
  }

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const QuickImplementation = () => {
  const steps = [
    {
      icon: <FaComments />,
      title: "Consulta Inicial",
      description: "Entendemos suas necessidades específicas e objetivos"
    },
    {
      icon: <FaCogs />,
      title: "Configuração Inteligente",
      description: "Criamos um sistema personalizado para seu negócio"
    },
    {
      icon: <FaRocket />,
      title: "Entrega em Tempo Recorde",
      description: "Em menos de 24 horas, tudo estará pronto para uso"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0,
      rotateY: -30,
      x: -50
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80
      }
    }
  };

  return (
    <AnimatedSection>
      <Section>
        <ParallaxEffect offset={100}>
          <Container>
            <ScrollReveal effect="scale" duration={0.8}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Implementação Rápida
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Configuração em Menos de 24 Horas!
              </motion.h3>
            </ScrollReveal>

            <StepsContainer
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {steps.map((step, index) => (
                <Step
                  key={index}
                  variants={stepVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <StepIcon
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </StepIcon>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {step.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {step.description}
                  </motion.p>
                </Step>
              ))}
            </StepsContainer>
          </Container>
        </ParallaxEffect>
      </Section>
    </AnimatedSection>
  );
};

export default QuickImplementation; 