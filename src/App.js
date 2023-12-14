import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth, postsRef } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser, setUserAuth } from './redux/user';
import { setPosts } from './redux/controls';
import NavRoutes from './routes/NavRoutes';
import './styles/appStyle.css';

function App() {
  const { refreshPosts } = useSelector((state) => state.controls);
  const { current_user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const currentUser = useAuth();

  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));

      return unsub;
    }, []);

    return currentUser;
  }

  const fetchPosts = async () => {
    onSnapshot(postsRef, (snapshot) => {
      const results = snapshot.docs.map((doc) => {
        return { ...doc.data(), key: doc.id };
      });
      dispatch(setPosts(results));
    });
  };

  useEffect(() => {
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
      dispatch(setUserAuth(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPosts]);

  // console.log('current users email: ', current_user.email);

  return (
    <BrowserRouter>
      <NavRoutes />
    </BrowserRouter>
  );
}

export default App;
