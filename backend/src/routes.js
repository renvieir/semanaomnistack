const { Router } = require('express');
const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs', DevController.update);
routes.delete('/devs', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;