import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './styles/appStyle.css';

function App() {
  const [token, setToken] = useState(null);
  const [credentials, setCredentials] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const getAuth = () => {
    setToken(localStorage.getItem('token'));
    setCredentials(localStorage.getItem('credentials'));
  };

  useEffect(() => {
    getAuth();
  }, []);

  useEffect(() => {
    setIsLoggedIn(true);
  }, [token]);

  return (
    <BrowserRouter>
      <Main token={token} credentials={credentials} isLoggedIn={isLoggedIn} />
    </BrowserRouter>
  );
}

export default App;
