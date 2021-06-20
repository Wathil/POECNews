const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  //console.log("req.headers=" + JSON.stringify(req.headers)); // "x-access-token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjI0MTEzNzQwLCJleHAiOjE2MjQyMDAxNDB9.olcSOirBet8q70gF_i1CvrdbJBKcM0pl_uNCgBUNO1w"

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
    req.role = decoded.role;
    next();
  });
};

isUtilisateur = (req, res, next) => {
  if (req.role === "administrateur") {
    next();
    return;
  }

  if (req.role === "redacteur") {
    next();
    return;
  }

  if (req.role === "utilisateur") {
    next();
    return;
  }

  res.status(403).send({
    message: "Require utilisateur Role!"
  });
  return;
};

isRedacteur = (req, res, next) => {
  if (req.role === "administrateur") {
    next();
    return;
  }

  if (req.role === "redacteur") {
    next();
    return;
  }

  res.status(403).send({
    message: "Require redacteur Role!"
  });
  return;
};

isAdministrateur = (req, res, next) => {
  if (req.role === "administrateur") {
    next();
    return;
  }

  res.status(403).send({
    message: "Require administrateur Role!"
  });
  return;
};

const authJwt = {
  verifyToken: verifyToken,
  isUtilisateur: isUtilisateur,
  isAdministrateur: isAdministrateur,
  isRedacteur: isRedacteur
};
module.exports = authJwt;
