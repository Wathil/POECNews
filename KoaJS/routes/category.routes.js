const controller = require("../controllers/category.controller");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_CATEGORIES http://localhost:8080/categories/

  router.get("/categories/", controller.getCategories); // ok

  router.get("/categories/:id", controller.getCategory); // ok

  router.post("/categories/add/", controller.addCategory); // ok

  router.delete("/categories/:id", controller.deleteCategory); // ok

  router.put("/categories/:id", controller.updateCategory); // ok

};