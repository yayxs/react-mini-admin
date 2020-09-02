const express = require("express");
const Mock = require("mockjs"); //引入mock

let app = express(); //实例化express


const bodyParser = require('body-parser');
app.use(bodyParser());
app.use("/api/login/account", function (req, res) {
  console.log(req.body)
  const { password, userName, type } = req.body;
  if (password === "admin" && userName === "admin") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "admin",
    });
    return;
  }

  if (password === "user" && userName === "user") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "user",
    });
    return;
  }

  if (type === "mobile") {
    res.send({
      status: "ok",
      type,
      currentAuthority: "admin",
    });
    return;
  }

  res.send({
    status: "error",
    // type,
    currentAuthority: "guest",
  });
});

//解决跨域问题
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen("8080", () => {
  console.log(`http://localhost:8080`);
});
