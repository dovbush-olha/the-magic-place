require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const { authRouter } = require('./src/routers/authRouter');
const { housesRouter } = require('./src/routers/housesRouter');
const { spellsRouter } = require('./src/routers/spellsRouter');
const { professorsRouter } = require('./src/routers/professorsRouter');
const { studentsRouter } = require('./src/routers/studentsRouter');

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.MONGO_URI;

mongoose.connect(DB_URL);

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/houses', housesRouter);
app.use('/api/spells', spellsRouter);
app.use('/api/professors', professorsRouter);
app.use('/api/students', studentsRouter);

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
})();

function errorHandler(err, req, res) {
  console.error(err);
  res.status(500).send({ message: 'Server error' });
}

app.use(errorHandler);
