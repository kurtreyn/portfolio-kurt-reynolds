import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from './redux/actions';
import Main from './components/Main';

function App() {
  return (
    <div className="app-container">
      <Main />
    </div>
  );
}

export default App;
