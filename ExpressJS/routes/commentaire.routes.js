const controller = require("../controllers/commentaire.controller");

module.exports = function (router) {

  // BASE URL http://localhost:8080/
  // BASE_URL_COMMENTAIRE http://localhost:8080/commentaires/
  
  router.get("/commentaires/byuserid/:id", controller.getCommentairesByUserId); // ok

  router.get("/commentaires/byarticleid/:id", controller.getCommentairesByArticleId); // ok

  router.get("/commentaires/:id", controller.getCommentaire);

  router.post("/commentaires/add/", controller.addCommentaire); // ok

  router.delete("/commentaires/:id", controller.deleteCommentaire); // ok

  router.put("/commentaires/:id", controller.updateCommentaire); // ok

};