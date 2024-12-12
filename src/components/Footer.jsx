import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import ScrollReveal from './ScrollReveal';

const FooterContainer = styled.footer`
  padding: 3rem 1.5rem;
  position: relative;
  z-index: 2;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  span {
    color: ${colors.primary};
    display: inline-block;
  }
`;

const Links = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: ${colors.primary};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: white;
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  i {
    color: #fff;
    font-size: 1.8rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
      transform: translateY(-5px);
    }
  }
`;

const Copyright = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <FooterContainer>
      <ScrollReveal>
        <Content
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Logo
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect<span>.ai</span>
          </Logo>

          <Links variants={itemVariants}>
            <motion.a 
              href="/blog"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.a>
            <motion.a 
              href="/base-conhecimento"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Base de Conhecimento
            </motion.a>
            <motion.a 
              href="#termos"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Termos de Uso
            </motion.a>
            <motion.a 
              href="#privacidade"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacidade
            </motion.a>
            <motion.a 
              href="#contato"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato
            </motion.a>
          </Links>

          <SocialIcons variants={itemVariants}>
            <motion.a 
              href="https://facebook.com/connect.ai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.i 
                className="fab fa-facebook"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.a>
            <motion.a 
              href="https://instagram.com/connect.ai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.i 
                className="fab fa-instagram"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/company/connect.ai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.i 
                className="fab fa-linkedin"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.a>
            <motion.a 
              href="https://youtube.com/@connect.ai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.i 
                className="fab fa-youtube"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.a>
          </SocialIcons>

          <Copyright variants={itemVariants}>
            © {new Date().getFullYear()} Conecta.ia - Todos os direitos reservados
          </Copyright>
        </Content>
      </ScrollReveal>
    </FooterContainer>
  );
};

export default Footer; 