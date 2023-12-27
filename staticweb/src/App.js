import React, { useState } from 'react';

import Register from './page/users/Register.js';
import Test from './page/users/Test.js';

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleFetchDataClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="App">
     <Register />
     {/* <Test /> */}
    </div>
  );
}

export default App;
