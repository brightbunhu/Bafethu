import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import { business } from '../data/business.js';
import { starterQuestions } from '../data/chatbotResponses.js';

const OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY'; // Replace with your actual API key
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function getAIResponse(message, conversationHistory) {
  try {
    const systemPrompt = `You are a helpful assistant for Bafethu Events & Logistics, a Zimbabwean event equipment rental company. 
    Company details:
    - Name: Bafethu Events & Logistics
    - Location: Mkoba 3, Gweru, Zimbabwe
    - Services: Chairs, Tables, Tents, PA System hiring
    - Coverage: Gweru, Midlands Province, Bulawayo, Surrounding areas
    - Phone: ${business.phones.join(' / ')}
    - Email: ${business.email}
    
    Be friendly, professional, and helpful. Keep responses concise (under 100 words). Focus on event equipment hire services.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.href,
        'X-Title': 'Bafethu Events Chatbot'
      },
      body: JSON.stringify({
        model: 'google/gemma-3-4b-it:free', // Free Gemini model
        messages: messages
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
      return data.choices[0].message.content;
    } else {
      throw new Error('No response from AI');
    }
  } catch (error) {
    console.error('AI Error:', error);
    return 'I apologize, but I\'m having trouble connecting right now. Please try again or contact us directly at ' + business.phones.join(' or ');
  }
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am Bafethu Assistant. How can I help you with your event equipment hire today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (value = input) => {
    const cleanValue = value.trim();

    if (!cleanValue || isLoading) {
      return;
    }

    setMessages((current) => [
      ...current,
      { sender: 'user', text: cleanValue }
    ]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getAIResponse(cleanValue, messages);

    setMessages((current) => [
      ...current,
      { sender: 'bot', text: aiResponse }
    ]);
    setIsLoading(false);
  };

  return (
    <div className="chatbot">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="chatbot-panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            aria-label="Bafethu Assistant chat"
          >
            <div className="chatbot-header">
              <div>
                <strong>Bafethu Assistant</strong>
                <span>Usually replies instantly</span>
              </div>
              <button
                className="icon-button"
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
              >
                <FiX />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div key={`${message.sender}-${index}`} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <span className="typing-indicator">...</span>
                </div>
              )}
            </div>

            <div className="chatbot-starters">
              {starterQuestions.map((question) => (
                <button key={question} type="button" onClick={() => sendMessage(question)}>
                  {question}
                </button>
              ))}
            </div>

            <form
              className="chatbot-form"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question"
                aria-label="Ask Bafethu Assistant"
              />
              <button type="submit" aria-label="Send message">
                <FiSend />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        className="chatbot-toggle"
        type="button"
        aria-label={isOpen ? 'Close Bafethu Assistant' : 'Open Bafethu Assistant'}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </button>
    </div>
  );
}

export default Chatbot;
