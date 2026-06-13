require("dotenv").config();

const app = require("./app");

const connectDB = require("./src/config/db");

connectDB();

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
