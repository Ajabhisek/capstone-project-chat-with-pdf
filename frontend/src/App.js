import React, { useState } from 'react';
import axios from 'axios';
import { ChatBox } from './components/ChatBox';
import { Dropzone } from './components/Dropzone';
import { QnA } from './components/QnA';
import './App.css';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileProcessed, setIsFileProcessed] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleFileProcess = async () => {
    if (selectedFile) {
      try {
        // Mock API call to simulate file processing
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
        setIsFileProcessed(true);
      } catch (error) {
        console.error('Error processing file:', error);
      }
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Cognitive QnA with PDF</h1>
      </header>
      <div className="main-content">
        <div className="left-section">
          <Dropzone onFileSelect={handleFileSelect} />
          {selectedFile && (
            <div className="file-info">
              <p>Selected file: {selectedFile.name}</p>
              <button className="process-button" onClick={handleFileProcess}>Process PDF</button>
            </div>
          )}
          <ChatBox />
        </div>
        <div className="right-section">
          <QnA isFileProcessed={isFileProcessed} />
        </div>
      </div>
      <footer className="app-footer">
        <p>&copy; 2024 Cognitive QnA</p>
      </footer>
    </div>
  );
};

export default App;
