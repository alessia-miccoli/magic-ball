const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://magic-ball-8b0da.firebaseio.com/',
  timeout: 2000
});

const getAnswerFromDB = function getAnswer(index){
  return new Promise((resolve, reject) => {
    instance.get(`/answers/${index}.json`)
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      reject(error);
    })
  })
}

export default getAnswerFromDB;
  