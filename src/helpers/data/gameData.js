import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/games.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addGame = (Game, user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/games.json`, Game)
    .then((response) => {
      const body = { gameFirebaseKey: response.data.name };
      axios.patch(`${dbUrl}/games/${response.data.name}.json`, body)
        .then(() => {
          getGames(user).then((orgArray) => resolve(orgArray));
        });
    }).catch((error) => reject(error));
});

const deleteGame = (gameFirebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/games/${gameFirebaseKey}.json`)
    .then(() => getGames(user).then((orgArray) => resolve(orgArray)))
    .catch((error) => reject(error));
});

const updateGame = (games, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/games/${games.gameFirebaseKey}.json`, games)
    .then(() => getGames(user).then(resolve))
    .catch((error) => reject(error));
});

export {
  getGames, addGame,
  deleteGame, updateGame
};
