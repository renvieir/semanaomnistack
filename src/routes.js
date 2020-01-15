const { Router } = require('express');
const axios = require('axios');

const routes = Router();
// Tipo de params
// Query Params request.query
// Route Params request.params
// Body         request.body

routes.get('', async (request, response) => {
  return response.send('<h1>Hello Dev</h1>')
});

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body;
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  console.log(apiResponse.data);

  const { name, avatar_url, bio } = apiResponse.data;
  return response.json({message: "Hello dev"});
});

module.exports = routes;