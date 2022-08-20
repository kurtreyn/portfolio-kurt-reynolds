import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setLoading } from './redux/actions';
import Main from './components/Main';
import './styles/appStyle.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
