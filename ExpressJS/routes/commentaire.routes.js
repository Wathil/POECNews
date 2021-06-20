const controller = require("../controllers/commentaire.controller");
const { authJwt } = require("../middleware");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_COMMENTAIRE http://localhost:8080/commentaires/
  
  router.get("/commentaires/byuserid/:id", controller.getCommentairesByUserId); // ok

  router.get("/commentaires/byarticleid/:id", controller.getCommentairesByArticleId); // ok

  router.get("/commentaires/:id", controller.getCommentaire);

  router.post("/commentaires/add/", [authJwt.verifyToken], controller.addCommentaire); // SECURE

  router.delete("/commentaires/:id", [authJwt.verifyToken], controller.deleteCommentaire); // SECURE

  router.put("/commentaires/:id", [authJwt.verifyToken], controller.updateCommentaire); // SECURE

};