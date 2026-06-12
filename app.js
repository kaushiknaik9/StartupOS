const express = require("express");

const logger = require("./src/middleware/logger.middleware");
const errorHandler = require("./src/middleware/errorHandler.middleware");

const healthroute = require("./src/routes/health.routes");

const UserRoute = require("./src/routes/user.routes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/v1/health", healthroute);

app.use("/api/v1/user", UserRoute);

app.use(errorHandler);

module.exports = app;
