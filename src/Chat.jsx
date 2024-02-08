import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components';

const Chat = () => {
  const [messages, setMessages] = useState([
    "How has the integration of artificial intelligence (AI) and machine learning impacted medical diagnostics and treatment modalities?",
    "What ethical considerations should be taken into account when implementing genetic testing and personalized medicine?",
    "How do socioeconomic factors influence access to healthcare and medical treatment, and what can be done to address healthcare disparities?"
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [inputHeight, setInputHeight] = useState('auto'); // State to track the height of the textarea
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the message list whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
      setInputHeight('35px'); // Reset input height to minimum height after sending message
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleInputChange = (e) => {
    const minAllowedHeight = 35; // Minimum height allowed for the textarea
    const maxAllowedHeight = 70; // Maximum height allowed for the textarea
    let newHeight = Math.max(minAllowedHeight, e.target.scrollHeight);
    newHeight = Math.min(maxAllowedHeight, newHeight);

    setNewMessage(e.target.value);
    setInputHeight(`${newHeight}px`);
  };

  return (
    <div className="w-screen mx-auto py-3 px-4 sm:px-6 lg:px-8 flex flex-col h-[92vh]  md:h-screen bg-gray-100 relative">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-4" ref={messagesEndRef}>
        {/* Display messages */}
        {messages.map((message, index) => (
          <div key={index} className={`p-2 flex ${index < 3 ? 'mx-auto justify-center' : 'justify-end'}`}>
            <div className={`bg-white p-2 rounded-lg ${index < 3 ? 'w-[80%]' : 'max-w-[60%]'}`}>
              <p className={`text-gray-800 ${index < 3 ? 'text-center' : 'text-right'} justify-center`}>
                {message}
              </p>
            </div>
          </div>
        ))}
        {/* Empty div to trigger scroll to bottom */}
        <div style={{ float:"left", clear: "both" }}></div>
      </div>
      {/* Chat input area */}
      <div className="p-4 bg-white flex flex-row justify-center items-center w-full absolute bottom-0 left-0">
        <textarea
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Message MedMind"
          className="mx-auto w-[80%] md:w-4/5 lg:w-4/5 p-2 border border-gray-300 rounded resize-none" // Use resize-none to disable manual resizing
          style={{ height: inputHeight }} // Set the height dynamically
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
