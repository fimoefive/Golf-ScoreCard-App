import firebase from 'firebase';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import firebaseConfig from '../helpers/apiKeys';
import { getGames } from '../helpers/data/gameData';
import { getHoles } from '../helpers/data/holeData';
import { createUser, getUser, getUserUid } from '../helpers/data/userData';
import Routes from '../helpers/Routes';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [holes, setHoles] = useState([]);

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
        getHoles(authed.uid).then((gamesArray) => setHoles(gamesArray));
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
          holes={holes}
          setHoles={setHoles}
        />
      </Router>
    </div>
  );
}

export default App;
