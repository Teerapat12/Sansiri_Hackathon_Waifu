const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

// MongoDb
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sansiri_waifu:waifu@cluster0-3odgt.gcp.mongodb.net/test?retryWrites=true', function (err) {
  if (err) throw err;
  console.log('Successfully connected');
});

var Project = require('./model/project');
var Follower = require('./model/follower');
var Worker = require('./model/worker');


const apiRoutes = require('./routes/index.js');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.use('/api', apiRoutes);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});