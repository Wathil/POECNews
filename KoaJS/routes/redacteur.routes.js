const controller = require("../controllers/redacteur.controller");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_REACTEUR http://localhost:8080/redacteurs/
  
  //router.get("/redacteurs/", ctx => controller.getRedacteurs(ctx)); // ok
  router.get("/redacteurs/", controller.getRedacteurs); // ok

  router.post("/redacteurs/add/", controller.AddRedacteur);

  router.get("/redacteurs", async ctx => { // http://localhost:8080/redacteurs != http://localhost:8080/redacteurs/
    ctx.body = "test";
  });

  router.get("/", async ctx => {
    ctx.body = 'Hello World!'
  })

};