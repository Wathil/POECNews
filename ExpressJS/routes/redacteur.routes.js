const controller = require("../controllers/redacteur.controller");

module.exports = function (app) {

  // http://localhost:8080/redacteurs/
  app.get("/redacteurs/", controller.getRedacteurs);

};