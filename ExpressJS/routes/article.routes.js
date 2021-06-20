const controller = require("../controllers/article.controller");
const { authJwt } = require("../middleware");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_ARTICLE http://localhost:8080/articles/

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post("/articles/", controller.getArticlesWithLimitAndOffset); // {"limit":1, "offset":3} https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group OK

  router.get("/articles/", controller.getArticles); // ok

  router.get("/articles/par-categorie/:categoryId", controller.getArticlesParCategorie); // 

  router.get("/articles/par-auteur/:userId", controller.getArticlesParAuteur); // 

  router.get("/articles/:id", [authJwt.verifyToken, authJwt.isUtilisateur], controller.getArticle); // SECURE

  router.post("/articles/add/", [authJwt.verifyToken, authJwt.isRedacteur], controller.addArticle); // SECURE

  router.delete("/articles/:id", [authJwt.verifyToken, authJwt.isRedacteur], controller.deleteArticle); // SECURE

  router.put("/articles/:id", [authJwt.verifyToken, authJwt.isRedacteur], controller.updateArticle); // SECURE

};