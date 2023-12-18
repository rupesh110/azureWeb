import React, { useState } from 'react';

function App() {
  const [responseMessage, setResponseMessage] = useState('');
  const [responseMessage2, setResponseMessage2] = useState('');

  const handleCheckButtonClick = async () => {
    try {
      console.log('Before fetch');
      const functionUrl = "https://createreactapp.azurewebsites.net/api/httpTrigger1?";
      const response = await fetch(functionUrl, { mode: 'cors' });
      console.log('After fetch', response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.text();
      setResponseMessage(data);
    } catch (error) {
      console.error('There was an error:', error.message);
    }
  };

  const handleCheckButtonClick2 = async () => {
    try {
      console.log('Before fetch');
      // Provide a valid URL for the fetch
      const functionUrl = "https://createreactapp.azurewebsites.net/api/httpTrigger1?";
      const response = await fetch(functionUrl, { mode: 'cors' });
      console.log('After fetch', response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.text();
      setResponseMessage2(data);
    } catch (error) {
      console.error('There was an error:', error.message);
    }
  };

  return (
    <div className="App">
      <p>{responseMessage}</p>
      <h1>Here we go</h1>
      <p>{responseMessage2}</p>
      <button onClick={handleCheckButtonClick}>Check</button>
      <button onClick={handleCheckButtonClick2}>Check</button>
    </div>
  );
}

export default App;
