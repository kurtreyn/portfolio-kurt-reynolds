import React from 'react';
import '../styles/loginStyle.css';

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-header-text">Login</h1>
      </div>

      <div className="login-body">
        <form action="" className="login-form">
          <input type="text" placeholder="user name" className="login-input" />
          <input
            type="password"
            placeholder="password"
            className="login-input login-input-password"
          />
        </form>
        <button className="login-button" onClick={handleLogin}>
          <span className="login-button-text">Login</span>
        </button>
      </div>
    </div>
  );
}
