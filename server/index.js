const express = require('express');
const morgan = require('morgan');
const config = require('config');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || config.get('port');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

const start = async () => {
  try {
    app.listen(PORT);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

function errorHandler(err, req, res) {
  console.error(err);
  res.status(500).send({ message: 'Server error' });
}

app.use(errorHandler);
