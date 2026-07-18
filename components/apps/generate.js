import { useState } from 'react';
import { generateText } from './gemini';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskGemini = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResponse('');
    try {
      const aiResponse = await generateText(input);
      setResponse(aiResponse);
    } catch (error) {
      setResponse("Failed to fetch response from Gemini. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h2>Gemini AI Assistant</h2>
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        rows={4}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button 
        onClick={handleAskGemini} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>
      
      {response && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '5px' }}>
          <strong>Response:</strong>
          <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
