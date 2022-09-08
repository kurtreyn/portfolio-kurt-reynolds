import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loginStyle.css';

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    const theHeaders = new Headers();
    theHeaders.append('Content-Type', 'application/json');

    const credentials = JSON.stringify({
      username: username,
      password: password,
    });

    const requestOptions = {
      method: 'POST',
      headers: theHeaders,
      body: credentials,
      redirect: 'follow',
    };
    setLoading(true);
    try {
      await fetch('44.203.171.173:8080/users/login', requestOptions)
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('credentials', JSON.stringify(credentials));
            console.log(response);
            // console.log(credentials);
          }
        });
      // setIsAuth(true);
    } catch (errors) {
      console.log(errors);
      alert(errors.message);
    }
    navigate('/');
  }
  // console.log(username, password);

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-header-text">Login</h1>
      </div>

      <div className="login-body">
        <form action="" className="login-form">
          <input
            type="text"
            placeholder="user name"
            className="login-input"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="login-input login-input-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className="login-button" onClick={handleLogin}>
          <span className="login-button-text">Login</span>
        </button>
      </div>
    </div>
  );
}
