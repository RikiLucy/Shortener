const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


// Set up the express app
const app = express();

// Log requests to the console.
app.use(cors());
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(express.static('images'));
app.use('/images', express.static(__dirname + '/images'));
// app.use(express.static(path.join(path.dirname(__dirname), 'client/build')));



const apiRoutes = require('./server/routes/api');

app.use('/api', apiRoutes);



// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('/', (req, res) => {
//   res.sendFile(path.join(`${path.dirname(__dirname)}/client/build/index.html`))
// });


// app.use("/", express.static(__dirname + '/images'));

module.exports = app;
