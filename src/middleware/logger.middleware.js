const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`URL: ${req.originalUrl}, Method:${req.method}`);
  console.log(`time: ${currentTime}`);
  next();
};

module.exports = logger;
