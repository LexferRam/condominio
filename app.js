const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.set("port", process.env.PORT || 5000);

app.use(cookieParser());
app.use(express.json());
app.use(cors());
//"mongodb://localhost:27017/condominioTest"
mongoose.connect(
  "mongodb+srv://lexfer:lfrp5894@cluster0.niekp.mongodb.net/condominio?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to database");
  }
);

const userRouter = require("./routes/User");
app.use("/user", userRouter);

app.listen(app.get("port"), () => {
  console.log("express server started");
});
