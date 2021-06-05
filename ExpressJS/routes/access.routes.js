const { authJwt } = require("../middleware");
const controller = require("../controllers/access.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/test/all/", controller.allAccess);

  app.get("/test/utilisateur/",
    [authJwt.verifyToken],
    controller.utilisateurBoard
  );

  app.get("/test/redacteur/",
    [authJwt.verifyToken, authJwt.isRedacteur],
    controller.redacteurBoard
  );

  app.get("/test/administrateur/",
    [authJwt.verifyToken, authJwt.isAdministrateur],
    controller.administrateurBoard
  );
};
