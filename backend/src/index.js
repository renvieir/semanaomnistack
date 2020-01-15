const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
mongoose.connect('mongodb://renvieir:Z63H0TZH5dPdRe9J@cluster0-shard-00-00-nrrnq.mongodb.net:27017,cluster0-shard-00-01-nrrnq.mongodb.net:27017,cluster0-shard-00-02-nrrnq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.listen(3333);