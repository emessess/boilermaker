const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./apiRoutes'));

app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '../public')));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, ()=> {
  console.log('server is listening on port Andre '+ PORT)
})
