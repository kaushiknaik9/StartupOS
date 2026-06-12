const logger = (req, res, next) => {
  console.log(`URL: ${req.originalUrl}, Method:${req.method}`);
  next();
};

module.exports = logger;
