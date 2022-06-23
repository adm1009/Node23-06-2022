const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./router/user.js")
const taskRouter = require("./router/task.js")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.use(userRouter)
app.use(taskRouter)

const port = process.env.PORT || 3000;

const multer = require("multer");
const upload = multer({
  dest:"images"
});

app.post("/upload",upload.single("upload"),(req,res)=>{
  res.send()
})

app.listen(port, () => {
  console.log("app is listening in " + port);
});

