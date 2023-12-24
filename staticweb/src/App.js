import React, { useState } from 'react';
import { useGetResponseQuery } from './slice/api.js';

function App() {
  const { data } = useGetResponseQuery();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleFetchDataClick = () => {
    // Set the buttonClicked state to true when the button is clicked
    setButtonClicked(true);
  };

  return (
    <div className="App">
      <h1>{process.env.REACT_APP_FUNCTION_URL}</h1>

      <h1>Here we go</h1>
      <>
        <button onClick={handleFetchDataClick}>Fetch Data</button>
        {/* Display data only if the button is clicked */}
        {buttonClicked && data && <p>{data.message}</p>}
      </>
    </div>
  );
}

export default App;
