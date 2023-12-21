import React, { useState } from 'react';
import { useGetResponseQuery } from './slice/api.js';

function App() {
  const [responseMessage, setResponseMessage] = useState('');
  const { data, isLoading, error, refetch } = useGetResponseQuery();

  const handleFetchDataClick = async () => {
    try {
      console.log('Before fetch');
      const functionUrl = "http://localhost:7071/api/httpTrigger1";
      const response = await fetch(functionUrl, { mode: 'cors' });
      console.log('After fetch', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.text();
      setResponseMessage(responseData);
    } catch (error) {
      console.error('There was an error:', error.message);
    }
  };

  return (
    <div className="App">
      <p>{responseMessage}</p>
      <h1>Here we go</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <button onClick={handleFetchDataClick}>Fetch Data</button>
          {data && <p>{data.message}</p>}
        </>
      )}
    </div>
  );
}

export default App;
