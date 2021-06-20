const controller = require("../controllers/category.controller");
const { authJwt } = require("../middleware");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_CATEGORIES http://localhost:8080/categories/

  router.get("/categories/", controller.getCategories); // ok

  router.get("/categories/:id", controller.getCategory); // ok

  router.post("/categories/add/", [authJwt.verifyToken, authJwt.isRedacteur], controller.addCategory); // SECURE

  router.delete("/categories/:id", [authJwt.verifyToken, authJwt.isRedacteur], controller.deleteCategory); // SECURE

  router.put("/categories/:id", [authJwt.verifyToken, authJwt.isRedacteur], controller.updateCategory); // SECURE

};