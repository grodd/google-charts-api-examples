const express = require('express');
const path = require('path');
const con = require('../constants');
const Service = require('./services/service');
const fetchData = require('./api/api');

const app = express();

// setting view engine and view directory to fetch views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* These are the two request handlers the first one '/' will
  serve the index page(first page) and the second one will
  serve the charts page and call the relevant methods to calculate and serve the charts page */
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/charts', async (req, res) => {
  const x = new Service(); // Created an object of the service class.
  const pages = await fetchData(con.pages) // calls to fetchData(api) and service class object methods.
    .then((values) => x.countDict(values))
    .then(() => x.getOutput());

  const posts = await fetchData(con.posts)
    .then((values) => x.countDict(values))
    .then(() => x.getOutput());
  res.render('charts', { posts, pages });
});

app.listen(3000, () => {
  console.log('***running***');
});
