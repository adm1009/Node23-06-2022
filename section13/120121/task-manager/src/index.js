const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./router/user.js")
const taskRouter = require("./router/task.js")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
// app.use((req,res,next)=>{
//   console.log(req.method,req.path);
//   next();
// })
// app.use((req,res,next)=>{
//   if(req.method === "GET"){
//       res.send("GET request disabled")
//   }else{
//     next();
//   }
// })
// app.use((req,res,next)=>{
//   res.status(503).send("site is currently unavailable")
// })
app.use(userRouter)
app.use(taskRouter)

const port = process.env.PORT || 3000;

const Task= require("./models/task");
// const User= require("./models/user.js");
const User = require("./models/user.js");

// const main = async() =>{
//   //  const task = await Task.findById("62b3fb994b88af1ab48ab8e6");
//   //  await task.populate('owner').execPopulate();
//   //  console.log(task.owner);

//   const user = await User.findById("62b2b090f78f8a1ce8de610b");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);

// };

// main();

app.listen(port, () => {
  console.log("app is listening in " + port);
});

