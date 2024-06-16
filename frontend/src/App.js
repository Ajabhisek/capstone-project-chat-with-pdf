import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import QnA from './components/QnA';
import ChatBox from './components/ChatBox';
import './App.css';

function App() {
  const [fileData, setFileData] = useState(null);

  const handleFileSelected = (file) => {
    setFileData(file);
  };

  const processFile = async () => {
    if (fileData) {
      try {
        const formData = new FormData();
        formData.append('file', fileData);
        const response = await axios.post('YOUR_BACKEND_PROCESS_ENDPOINT', formData);
        console.log('PDF processed:', response.data);
      } catch (error) {
        console.error('Error processing PDF:', error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Cognitive Q&A</h1>
          <img src="your_image_path_here.png" alt="Chat or Robot" className="header-image" />
        </div>
        <p>Version 1.0</p>
      </header>
      <main>
        <div className="left-section">
          <section className="upload-section">
            <h2>Upload your PDF</h2>
            <FileUpload onFileSelected={handleFileSelected} />
            {fileData && <button className="process-button" onClick={processFile}>Process PDF</button>}
          </section>
          <section className="chat-history-section">
            <ChatBox />
          </section>
        </div>
        <section className="qa-section">
          <h2>Ask me anything!</h2>
          <QnA fileData={fileData} />
        </section>
      </main>
      <footer>
        <p>Design and Build by Group 4</p>
        <p>Group 4©. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
