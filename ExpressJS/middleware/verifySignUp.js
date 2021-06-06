const db = require("../models");
const ROLES = db.ROLES;
const userTable = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // loginName
  const loginName = req.body.loginName;
  userTable.findOne({
    where: {
      loginName: loginName
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! loginName " + loginName + " is already in use!"
      });
      return;
    }

    // Email
    const email = req.body.email;
    userTable.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! email " + email + " is already in use!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
