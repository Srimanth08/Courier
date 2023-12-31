const express = require("express");
const router = express.Router();
module.exports = (app) => {
  const auth = require("../controllers/auth.controller.js");

  var router = require("express").Router();

  // Login
  router.post("/login", auth.login);
   
  // Log
  router.post("/logout", auth.logout);

  app.use("/courierapi", router);
};
