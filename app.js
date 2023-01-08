var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

// Conectar a Mongodb vía Mongoose
require("./lib/connectMongoose");

// Cargar el modelo
require("./models/Anuncio");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(
  "/images/anuncios",
  express.static(path.join(__dirname, "/public/images/anuncios"))
);
app.use("/api/v1/anuncios", require("./routes/api/v1/anuncios"));
app.use("/api/v1/tags", require("./routes/api/v1/tags"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res) {
  res.status(err.status || 500);

  if (req.originalUrl.indexOf("/api") === 0) {
    // llamada de API, respondo JSON
    return res.json({ success: false, error: err.message });
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.render("error");
});

module.exports = app;
