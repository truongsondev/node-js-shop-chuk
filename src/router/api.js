const express = require("express");
const router = express.Router();

const initAPIRoute = (app) => {
  router.get("/", (req, res) => {
    res.send("hello word");
  });

  return app.use("/api/v1", router);
};

export default initAPIRoute;
