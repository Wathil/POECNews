const controller = require("../controllers/user.controller");
const { authJwt } = require("../middleware");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_USER http://localhost:8080/users/
  
  router.get("/users/", controller.getUsers); // ok

  router.get("/users/utilisateurs/", controller.getUtilisateurs); // 

  router.get("/users/redacteurs/", controller.getRedacteurs); // 

  router.get("/users/:id", controller.getUser); // ok

  router.post("/users/add/", [authJwt.verifyToken, authJwt.isAdministrateur], controller.addUser); // SECURE

  router.delete("/users/:id", [authJwt.verifyToken, authJwt.isAdministrateur], controller.deleteUser); // SECURE

  router.put("/users/:id", [authJwt.verifyToken, authJwt.isAdministrateur], controller.updateUser); // SECURE

  router.put("/userswithpassword/:id", [authJwt.verifyToken, authJwt.isAdministrateur], controller.updateUserWithPassword); // ok // http://localhost:8080/userswithpassword/:id

  router.post("/users/login/", controller.login);

};