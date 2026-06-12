const healthcheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is HealthCheck Router and it is running perfectly fine !!",
  });
};

module.exports = healthcheck;
