import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './styles/appStyle.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  );
}

export default App;
