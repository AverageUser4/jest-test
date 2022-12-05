const axios = require('axios');

let config = {
  headers: {
    'accept-encoding': null
  }
}

async function fetchData(id) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`, config);
  return response.data;
}

module.exports = fetchData;