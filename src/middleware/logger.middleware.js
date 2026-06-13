const logger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log("");
  console.log(`URL: ${req.originalUrl}, Method:${req.method}`);
  console.log(`time: ${currentTime}`);
  console.log("");
  next();
};

module.exports = logger;
