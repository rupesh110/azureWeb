import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './page/users/Register.js';
import Test from './page/users/Test.js';
import Home from './page/home/Home.js';
import Login from './page/users/Login.jsx';
import PrivatePage from './page/users/PrivatePage.jsx';

function App() {;

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register}/>
        <Route path="/test" Component={Test}/>
        <Route path="/login" Component={Login}/>
        <Route path="/private" Component={PrivatePage}/>
        <Route path="*" Component={Home}/>
      </Routes>
    </Router>
  );
}
export default App;
