import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ChatBox.css';

export const ChatBox = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);

  const fetchChatHistory = async () => {
    try {
      const response = await fetch('chat_history.json');
      const data = await response.json();
      setChatHistory(data);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="chatbox-container">
      <div className="chat-history-label">Chat History</div>
      <Tabs selectedIndex={selectedIndex} onSelect={handleSelect} className="chat-tabs">
        <TabList>
          {chatHistory.map((chat, index) => (
            <Tab key={index}>{`Chat ${index + 1}`}</Tab>
          ))}
        </TabList>

        {chatHistory.map((chat, index) => (
          <TabPanel key={index}>
            <div className="chat-messages">
              {chat.messages.map((message, msgIndex) => (
                <div className="message" key={msgIndex}>
                  <div className="question">{`Q: ${message.question}`}</div>
                  <div className="answer">{`A: ${message.answer}`}</div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

