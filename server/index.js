const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const { authRouter } = require('./src/routers/authRouter');
const { housesRouter } = require('./src/routers/housesRouter');
const { spellsRouter } = require('./src/routers/spellsRouter');
const { staffRouter } = require('./src/routers/staffRouter');
const { studentsRouter } = require('./src/routers/studentsRouter');
const { ServerApiVersion } = require('mongodb');

const app = express();
const PORT = process.env.PORT || config.get('port');

mongoose.connect(
  "mongodb+srv://root:5D1iQ69yAT74gtZU@cluster0.8rziwnr.mongodb.net/magic-place",
  { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
)
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));


//mongoose.connect(config.get('mongoUri'));

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/houses', housesRouter);
app.use('/api/spells', spellsRouter);
app.use('/api/staff', staffRouter);
app.use('/api/students', studentsRouter);

(async () => {
  try {
    app.listen(PORT);
    console.log(`Connected to ${PORT}`)
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
})();

function errorHandler(err, req, res) {
  console.error(err);
  res.status(500).send({ message: 'Server error' });
}

app.use(errorHandler);
