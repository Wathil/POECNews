const controller = require("../controllers/redacteur.controller");

module.exports = function (router) {

  // http://localhost:8080/redacteurs/
  //router.get("/redacteurs/", ctx => controller.getRedacteurs(ctx)); // ok
  router.get("/redacteurs/", controller.getRedacteurs); // ok

  router.post("/add/", controller.AddRedacteur);

  router.get("/redacteurs", async ctx => {
    ctx.body = "test";
  });

  router.get("/", async ctx => {
    ctx.body = 'Hello World!'
  })

};