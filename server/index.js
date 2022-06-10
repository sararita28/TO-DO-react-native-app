const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const authRoute = require("./routes/auth");
const tasksRoute = require("./routes/tasks");
const usersRoute = require("./routes/users");
const app = express();
dotenv.config();

//Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on PORT ${PORT}`);
    });
    console.log("connected to MongoDB Database");
  })
  .catch((err) => {
    throw err;
  });

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
});

//Middlewares
app.use(express.json());

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/tasks", tasksRoute);
