const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const userTable = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isUtilisateur = (req, res, next) => {
  userTable.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "utilisateur") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require utilisateur Role!"
      });
      return;
    });
  });
};

isAdministrateur = (req, res, next) => {
  userTable.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "administrateur") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require administrateur Role!"
      });
      return;
    });
  });
};

isRedacteur = (req, res, next) => {
  userTable.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "rédacteur") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require rédacteur Role!"
      });
    });
  });
};

isRedacteurOrAdministrateur = (req, res, next) => {
  userTable.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "rédacteur") {
          next();
          return;
        }

        if (roles[i].name === "administrateur") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require rédacteur or administrateur Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isUtilisateur: isUtilisateur,
  isAdministrateur: isAdministrateur,
  isRedacteur: isRedacteur,
  isRedacteurOrAdministrateur: isRedacteurOrAdministrateur
};
module.exports = authJwt;
