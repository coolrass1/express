const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Bootcamproute = require('./route/Bootcamp');
const erroHandler = require('./uils/errorHandler');
dotenv.config({ path: './config/config.env' });
const app = express();

const PORT = process.env.PORT || 5000;
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  app.listen(PORT, () => {
    console.log('started at 50000');
  });
};
connectDB();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootcamp', Bootcamproute);
app.use(erroHandler);

app.get('/', (req, res) => {
  res.send('hi');
});
