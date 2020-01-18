const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://renvieir:Z63H0TZH5dPdRe9J@cluster0-shard-00-00-nrrnq.mongodb.net:27017,cluster0-shard-00-01-nrrnq.mongodb.net:27017,cluster0-shard-00-02-nrrnq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.listen(3333);