import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './page/users/Register.jsx';
import Test from './page/users/Test.js';
import Home from './page/home/Home.js';
import Login from './page/users/Login.jsx';
import PrivatePage from './page/users/PrivatePage.jsx';
import AuthRoute from './Route/AuthRoute.js';

import LoginWithGoogle from './page/users/LoginWithGoogle.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginwithgoogle" element={<LoginWithGoogle />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<AuthRoute path="/private" element={<PrivatePage />} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
