import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getHoles = (uid) => new Promise((resolve, reject) => {
  // axios.get(`${dbUrl}/holes.json`)
  axios.get(`${dbUrl}/holes.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addHole = (hole, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/holes.json`, hole)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/holes/${response.data.name}.json`, body)
        .then(() => {
          getHoles(uid).then((orgArray) => resolve(orgArray));
        });
    }).catch((error) => reject(error));
});

// const addHole = (hole) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/holes.json`, hole)
//     .then((response) => {
//       const body = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/holes/${response.data.name}.json`, body)
//         .then(() => resolve(response.data.name));
//     }).catch((error) => reject(error));
// });

const deleteHole = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/holes/${firebaseKey}.json`)
    .then(() => getHoles(uid).then((holeArray) => resolve(holeArray)))
    .catch((error) => reject(error));
});

const updateHole = (holes, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/holes/${holes.firebaseKey}.json`, holes)
    .then(() => getHoles(uid).then(resolve))
    .catch((error) => reject(error));
});

const getSingleHole = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/holes/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
export {
  getHoles, addHole,
  deleteHole, updateHole,
  getSingleHole
};
