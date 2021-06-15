import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getGames } from '../helpers/data/gameData';
import { getHoles } from '../helpers/data/holeData';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [games, setGames] = useState([]);
  const [holes, setHoles] = useState([]);
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
        getGames(userInfoObj).then((resp) => setGames(resp));
        getHoles(userInfoObj).then((resp) => setHoles(resp));
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <h2>GOLF APP</h2>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
          holes={holes}
          setHoles={setHoles}
          games={games}
          setGames={setGames}
        />
      </Router>
    </div>
  );
}

export default App;
