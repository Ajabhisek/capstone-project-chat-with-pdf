import React, { useState } from 'react';
import axios from 'axios';
import './QnA.css';

const QnA = ({ fileData }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askQuestion = async () => {
    if (question.trim() !== '' && fileData) {
      try {
        const response = await axios.post('YOUR_BACKEND_QUESTION_ENDPOINT', {
          question,
          fileData,
        });
        setAnswer(response.data.answer);
      } catch (error) {
        console.error('Error getting answer:', error);
        setAnswer('Error getting answer.');
      }
    }
  };

  return (
    <div className="qa-container">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about the PDF..."
      />
      <button onClick={askQuestion}>Generate Answer</button>
      <div className="response">
        <strong>Response:</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QnA;
