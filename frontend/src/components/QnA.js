import React, { useState } from 'react';
import axios from 'axios';
import './QnA.css';

export const QnA = ({ isFileProcessed }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleGenerateAnswer = async () => {
    try {
      // Mock API call to OpenAI for generating answer
      const response = await axios.post('https://api.openai.com/v1/completions', {
        prompt: question,
        max_tokens: 150,
        model: "text-davinci-003",
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json'
        }
      });

      setAnswer(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error generating answer:', error);
      setAnswer('Error generating answer');
    }
  };

  return (
    <div className="qa-container">
      <h2>Ask a Question</h2>
      {isFileProcessed ? (
        <>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
          />
          <button className="generate-button" onClick={handleGenerateAnswer}>Generate Answer</button>
          {answer && (
            <div className="response">
              <strong>Response:</strong>
              <p>{answer}</p>
            </div>
          )}
        </>
      ) : (
        <p>Please process a PDF file first.</p>
      )}
    </div>
  );
};
