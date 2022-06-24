const clenterrohandler = require('./clientErrorHandler ');

const erroHandler = (err, req, res, next) => {
  let error = { ...err };
  // console.log(err);

  console.log(JSON.stringify(err));
  if (err.name === 'CastError') {
    error = new clenterrohandler('object id doenst', 500);
  }

  if (err.name === 'ValidationError') {
    message = err.message;

    error = new clenterrohandler(message, 500);
  }
  if (err.code === 11000) {
    // console.log(JSON.stringify(err.errors));
    console.log(err.name);
    message = 'duplicate value';

    error = new clenterrohandler(message, 500);
  }
  res.status(500).json({
    statuscode: error.statuscode,
    message: error.message,
    success: false,
  });
};

module.exports = erroHandler;
