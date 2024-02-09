import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components';
import questionAnswerMap from './components/qna';

// Function to extract keywords from a sentence
function extractKeywords(sentence) {
  const tokens = sentence.toLowerCase().split(/\s+/);
  const stemmedTokens = tokens.map(token => stemWord(token));
  const uniqueTokens = [...new Set(stemmedTokens)]; // Remove duplicates
  return uniqueTokens;
}

// Function to stem a word
function stemWord(word) {
  // This is a simple example, you can use more sophisticated stemming algorithms if needed
  return word.replace(/ing$/, '').replace(/s$/, '');
}

// Function to find the best matching question based on keywords
function findBestMatchingQuestion(keywords) {
  let bestMatch = { question: '', score: 0 };

  // Iterate over questions to find the best match
  Object.keys(questionAnswerMap).forEach(question => {
    const questionKeywords = extractKeywords(question);
    const intersection = questionKeywords.filter(token => keywords.includes(token));
    const score = intersection.length / Math.max(keywords.length, questionKeywords.length);

    if (score > bestMatch.score) {
      bestMatch = { question, score };
    }
  });

  return bestMatch;
}

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [inputHeight, setInputHeight] = useState('auto');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newQuery = { type: 'query', content: newMessage };
      setMessages(prevMessages => [...prevMessages, newQuery]);

      const keywords = extractKeywords(newMessage);
      const { question, score } = findBestMatchingQuestion(keywords);

      if (score > 0.2) { // Set your threshold as needed
        const newResponse = { type: 'response', content: questionAnswerMap[question] };
        setMessages(prevMessages => [...prevMessages, newResponse]);
      } else {
        const noResponse = { type: 'response', content: "I'm sorry, I don't understand." };
        setMessages(prevMessages => [...prevMessages, noResponse]);
      }

      setNewMessage('');
      setInputHeight('35px');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleInputChange = (e) => {
    const minAllowedHeight = 35;
    const maxAllowedHeight = 70;
    let newHeight = Math.max(minAllowedHeight, e.target.scrollHeight);
    newHeight = Math.min(maxAllowedHeight, newHeight);

    setNewMessage(e.target.value);
    setInputHeight(`${newHeight}px`);
  };

  return (
    <div className="w-screen mx-auto py-3 px-4 sm:px-6 lg:px-8 flex flex-col h-[92vh]  md:h-screen bg-gray-100 relative">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-4" ref={messagesEndRef}>
        {messages.map((message, index) => (
          <div key={index} className={`p-2 flex ${message.type === 'query' ? 'justify-end' : 'justify-start'}`}>
            <div className={`bg-white p-2 rounded-lg ${message.type === 'query' ? 'text-right' : 'text-left'} max-w-[80%]`}>
              <p className="text-gray-800">{message.content}</p>
            </div>
          </div>
        ))}
        <div style={{ float:"left", clear: "both" }}></div>
      </div>
      <div className="p-4 bg-white flex flex-row justify-center items-center w-full absolute bottom-0 left-0">
        <input
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Message MedMind"
          className="mx-auto w-[80%] md:w-4/5 lg:w-4/5 p-2 border border-gray-300 rounded resize-none"
          style={{ height: inputHeight }}
        />
        <button
          onClick={handleSendMessage}
          className="mx-auto mt-2 md:mt-0 px-4 py-2 bg-gradient-to-br from-[#569199] to-[#a4dad2] text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
