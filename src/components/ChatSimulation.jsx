import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';

const typing = keyframes`
  0% { width: 0 }
  100% { width: 100% }
`;

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`;

const ChatSection = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: ${colors.white};
  margin-bottom: 1.5rem;
  
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
      height: 3px;
      background: ${colors.primary};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${colors.whiteTransparent};
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ChatContainer = styled(motion.div)`
  max-width: 350px;
  height: 500px;
  margin: 0 auto;
  background: #111;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: ${colors.primary}20;
    border-radius: 20px 20px 0 0;
    pointer-events: none;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`;

const BotAvatar = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 1.2rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const BotInfo = styled.div`
  flex: 1;
`;

const BotName = styled.h3`
  color: ${colors.white};
  font-size: 1rem;
  margin: 0;
`;

const OnlineStatus = styled.div`
  color: ${colors.whiteTransparent};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4CAF50;
    display: inline-block;
  }
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 140px);
  scroll-behavior: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.primary}40;
    border-radius: 3px;
    
    &:hover {
      background: ${colors.primary}60;
    }
  }
`;

const Message = styled(motion.div)`
  max-width: 80%;
  padding: 0.8rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  line-height: 1.4;
  position: relative;
  
  ${props => props.$isBot ? `
    background: ${colors.primary}20;
    color: ${colors.white};
    border-top-left-radius: 5px;
    align-self: flex-start;
  ` : `
    background: #1a1a1a;
    color: ${colors.white};
    border-top-right-radius: 5px;
    align-self: flex-end;
  `}
`;

const TypingIndicator = styled(motion.div)`
  display: flex;
  gap: 0.3rem;
  padding: 1rem;
  align-items: center;
  color: ${colors.whiteTransparent};
  font-size: 0.9rem;

  span {
    width: 4px;
    height: 4px;
    background: ${colors.primary};
    border-radius: 50%;
    display: inline-block;
    animation: ${typing} 1.4s infinite;
    animation-delay: ${props => props.$delay}s;
  }
`;

const ChatInput = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
`;

const Input = styled.input`
  flex: 1;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.8rem 1.2rem;
  color: ${colors.white};
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${colors.primary}40;
    box-shadow: 0 0 0 2px ${colors.primary}20;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SendButton = styled(motion.button)`
  background: ${colors.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background: ${colors.primary}dd;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const botResponses = {
  initial: {
    text: "👋 Olá! Sou a IA da Conecta. Como posso ajudar?",
    options: ["Quero automatizar meu atendimento", "Quanto custa?", "Como funciona?"]
  },
  "quero automatizar meu atendimento": {
    text: "Ótimo! Posso te ajudar com isso! 🚀\nQual seu tipo de negócio?",
    options: ["E-commerce", "Serviços", "Loja física"]
  },
  "quanto custa": {
    text: "Temos planos a partir de R$ 97/mês com 7 dias grátis! 💰\nQuer conhecer todos os planos?",
    options: ["Sim, quero ver os planos", "É muito caro", "Quero uma demonstração"]
  },
  "como funciona": {
    text: "É super simples! Eu aprendo seu negócio e atendo seus clientes 24/7! 🤖\nQuer ver em ação?",
    options: ["Sim, quero ver", "Tenho mais dúvidas", "Quanto custa?"]
  },
  "e-commerce": {
    text: "Perfeito para e-commerce! Veja o que posso fazer:\n🛍️ Mostrar produtos\n💬 Tirar dúvidas\n🚚 Informar frete\n💳 Auxiliar na compra",
    options: ["Como começar?", "Quero ver uma demo", "Qual o preço?"]
  }
};

const ChatSimulation = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Inicia a conversa
    handleBotResponse(botResponses.initial);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleBotResponse = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response.text, isBot: true }]);
      setIsTyping(false);
      setCurrentOptions(response.options || []);
    }, 1000);
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue('');
    setCurrentOptions([]);

    // Procura resposta do bot
    const normalizedInput = text.toLowerCase();
    const response = botResponses[normalizedInput] || {
      text: "Desculpe, não entendi. Pode reformular? 😅",
      options: ["Como funciona?", "Quanto custa?", "Falar com humano"]
    };

    // Bot responde após um tempo
    setIsTyping(true);
    setTimeout(() => {
      handleBotResponse(response);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <ChatSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experimente agora uma <span>conversa com nossa IA</span>
        </Title>
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interaja com nossa IA e veja como ela pode transformar 
          seu atendimento em uma experiência extraordinária.
        </Description>
        
        <ChatContainer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ChatHeader>
            <BotAvatar whileHover={{ scale: 1.1, rotate: 5 }}>
              <i className="fas fa-robot" />
            </BotAvatar>
            <BotInfo>
              <BotName>Conecta.ia Assistant</BotName>
              <OnlineStatus>Online agora</OnlineStatus>
            </BotInfo>
          </ChatHeader>
          
          <ChatMessages ref={chatMessagesRef}>
            {messages.map((message, index) => (
              <Message
                key={index}
                $isBot={message.isBot}
                initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {message.text}
              </Message>
            ))}
            
            {isTyping && (
              <TypingIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span style={{ animationDelay: '0s' }} />
                <span style={{ animationDelay: '0.2s' }} />
                <span style={{ animationDelay: '0.4s' }} />
              </TypingIndicator>
            )}

            {currentOptions.length > 0 && !isTyping && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {currentOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSendMessage(option)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '8px 16px',
                      background: `${colors.primary}20`,
                      border: `1px solid ${colors.primary}40`,
                      borderRadius: '20px',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            )}
          </ChatMessages>

          <ChatInput>
            <Input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SendButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSendMessage()}
            >
              <i className="fas fa-paper-plane" />
            </SendButton>
          </ChatInput>
        </ChatContainer>
      </Container>
    </ChatSection>
  );
};

export default ChatSimulation; 