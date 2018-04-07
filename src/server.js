// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const routes = require('./app/routes');
const db = require('../config/db');

const port = 8001;

//Express can’t process URL encoded forms on its own
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err){
    return console.log(err);
  }
  dbConnect = database.db("qamarmirza");
  routes(app, dbConnect);
  console.log('listening');
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});