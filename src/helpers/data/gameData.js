import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = (uid) => new Promise((resolve, reject) => {
  // axios.get(`${dbUrl}/games.json`)
  axios.get(`${dbUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addGame = (Game, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/games.json`, Game)
    .then((response) => {
      const body = { gameFirebaseKey: response.data.name };
      axios.patch(`${dbUrl}/games/${response.data.name}.json`, body)
        .then(() => {
          getGames(uid).then((orgArray) => resolve(orgArray));
        });
    }).catch((error) => reject(error));
});

const deleteGame = (gameFirebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/games/${gameFirebaseKey}.json`)
    .then(() => getGames(uid).then((orgArray) => resolve(orgArray)))
    .catch((error) => reject(error));
});

const updateGame = (games, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/games/${games.gameFirebaseKey}.json`, games)
    .then(() => getGames(uid).then(resolve))
    .catch((error) => reject(error));
});

const getSingleGame = (gameFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/games/${gameFirebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getGames, addGame,
  deleteGame, updateGame,
  getSingleGame
};
