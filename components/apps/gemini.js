import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function GeminiChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize the Gemini API client
  // For Vite use: import.meta.env.VITE_GEMINI_API_KEY
  // For Create React App use: process.env.REACT_APP_GEMINI_API_KEY
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      // Use "gemini-1.5-flash" for fast, efficient text generation
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      
      setResponse(result.response.text());
    } catch (error) {
      console.error("Gemini API Error:", error);
      setResponse("Failed to generate response. Check your API key or console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Gemini AI Assistant</h2>
      <textarea
        rows="4"
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        placeholder="Ask Gemini something..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button 
        onClick={handleGenerate} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? 'Generating...' : 'Ask AI'}
      </button>

      <div style={{ marginTop: '20px', background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <strong>Response:</strong>
        <p style={{ whiteSpace: 'pre-wrap' }}>{response || "No response yet."}</p>
      </div>
    </div>
  );
}
