const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const User = require("./models/user");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server started");
});
