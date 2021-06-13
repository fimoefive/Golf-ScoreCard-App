import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getHoles = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/holes.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addHole = (hole, user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/holes.json`, hole)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/holes/${response.data.name}.json`, body)
        .then(() => {
          getHoles(user).then((orgArray) => resolve(orgArray));
        });
    }).catch((error) => reject(error));
});

const deleteHole = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/holes/${firebaseKey}.json`)
    .then(() => getHoles(user).then((orgArray) => resolve(orgArray)))
    .catch((error) => reject(error));
});

const deleteHole, updateHole
  = (hole, user) => new Promise((resolve, reject) => {
    axios.patch(`${dbUrl}/holes/${hole.firebaseKey}.json`, hole)
      .then(() => getHoles(user).then(resolve))
      .catch((error) => reject(error));
  });

export {
  getHoles, addHole,
  deleteHole, updateHole
};
