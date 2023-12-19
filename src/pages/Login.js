import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles/loginStyle.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  function checkForErrors() {
    if (!email || email === '') {
      setHasError(true);
      alert('Must provide a valid email address');
      resetForm();
    } else if (!email.includes('@')) {
      setHasError(true);
      alert('Email address must contain @ symbol');
      resetForm();
    } else if (!password || password === '') {
      setHasError(true);
      alert('Must provide a password');
      resetForm();
    }
  }

  function signIn(email, password) {
    checkForErrors();
    if (!hasError) {
      return signInWithEmailAndPassword(auth, email, password);
    } else {
      resetForm();
    }
  }

  function resetForm() {
    setEmail('');
    setPassword('');
    setHasError(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(email, password)
        .then(setLoading(false))
        .then(alert('Login successful'))
        .then(() => navigate('/'));
    } catch (error) {
      console.log(error.message);
      alert('Error', error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-header-text">Login</h1>
      </div>

      <div className="login-body">
        <form action="" className="login-form">
          <input
            type="text"
            placeholder="email"
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="login-input login-input-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="login-button"
          disabled={loading}
          onClick={handleLogin}>
          <span className="login-button-text">Login</span>
        </button>
      </div>
    </div>
  );
}
