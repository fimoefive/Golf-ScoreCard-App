import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './helpers/apiKeys';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <h2>GOLF ScoreCard APP</h2>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
        />
      </Router>
    </div>
  );
}

export default App;
