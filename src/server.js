const express = require("express");
import initAPIRoute from "./router/api";
require("dotenv").config();
const port = Number(process.env.PORT) || 8080;
const app = express();
import connectDB from "../config/connectDB";

const bodyParser = require("body-parser");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.LOCAL_HOST || "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//save body form data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// init API router and web Route
initAPIRoute(app);

connectDB();

app.listen(port, () => {
  console.log("App starting successfully with port " + port);
});
