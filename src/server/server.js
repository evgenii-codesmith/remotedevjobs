const express = require ('express');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/build', express.static('build'))

//Requiring the router.js
app.use('/',require('./router'));

//Staring the server
app.listen(PORT,(err)=>{
  if (err) console.log(err);
  else console.log(`Server is on port: ${PORT}...`);
});
