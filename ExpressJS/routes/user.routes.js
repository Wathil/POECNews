const controller = require("../controllers/user.controller");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_USER http://localhost:8080/users/
  
  router.get("/users/", controller.getUsers); // ok

  router.get("/users/utilisateurs/", controller.getUtilisateurs); // 

  router.get("/users/redacteurs/", controller.getRedacteurs); // 

  router.get("/users/:id", controller.getUser); // ok

  router.post("/users/add/", controller.addUser); // ok

  router.delete("/users/:id", controller.deleteUser); // ok

  router.put("/users/:id", controller.updateUser); // ok

  router.post("/users/login/", controller.login);

};