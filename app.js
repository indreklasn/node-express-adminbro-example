var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/expressjs");

const adminBro = new AdminBro({
  databases: [],
  rootPath: "/admin"
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
