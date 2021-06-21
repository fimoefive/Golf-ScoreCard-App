import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getUser, getUserUid, createUser } from '../helpers/data/userData';
import { getGames } from '../helpers/data/gameData';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);

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
        getUserUid(userInfoObj).then((response) => {
          // getUserUid(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            createUser(userInfoObj);
            getUser(userInfoObj);
            // createUser(userInfoObj).then((resp) => setUser(resp));
          }
        });
        // else {
        getGames(authed.uid).then((playerArray) => setGames(playerArray));
        // getGames(authed.uid).then(setGames);
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
        <Routes user={user}
          games={games}
          setGames={setGames}
        />
      </Router>
    </div>
  );
}

export default App;
