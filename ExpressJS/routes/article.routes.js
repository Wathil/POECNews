const controller = require("../controllers/article.controller");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_ARTICLE http://localhost:8080/articles/

  router.post("/articles/", controller.getArticlesWithLimitAndOffset); // {"limit":1, "offset":3} https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group OK

  router.get("/articles/", controller.getArticles); // ok

  router.get("/articles/par-categorie/:categoryId", controller.getArticlesParCategorie); // 

  router.get("/articles/par-auteur/:userId", controller.getArticlesParAuteur); // 

  router.get("/articles/:id", controller.getArticle); // ok

  router.post("/articles/add/", controller.addArticle); // ok

  router.delete("/articles/:id", controller.deleteArticle); // ok

  router.put("/articles/:id", controller.updateArticle); // ok

};