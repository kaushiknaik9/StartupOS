const express = require("express");

const logger = require("./src/middleware/logger.middleware");
const errorHandler = require("./src/middleware/errorHandler.middleware");

const healthroute = require("./src/routes/health.routes");

const app = express();

app.use(express.json());

app.use(logger);
app.use(errorHandler);

app.use("/v1/health", healthroute);

modules.exports = app;
