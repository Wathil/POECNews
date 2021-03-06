const db = require("../models");
const config = require("../config/auth.config");
const user = db.user;
const role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken"); // !
var bcrypt = require("bcryptjs"); // !

exports.signup = (req, res) => { // s'inscrire
  // Save User to Database
  user.create({
    loginName: req.body.loginName, // !
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    accredit: 1
  })
    .then(user => {
      if (req.body.roles) {
        role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 2 utilisateur
        user.setRoles([2]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => { // connexion login
  user.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var lesRoles = [];
      var idRoles = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          lesRoles.push(roles[i].name); // !
          idRoles.push(roles[i].id); //!
        }

        var token = jwt.sign({ id: user.id, role: lesRoles[0] }, config.secret, { // accès direct roles
          expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
          id: user.id,
          loginName: user.loginName,
          email: user.email,
          accredit: user.accredit,
          roles: lesRoles,
          accessToken: token // !
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.changePassword = (req, res) => {

  console.log("req.body.email=" + req.body.email);
  console.log("req.body.oldPassword=" + req.body.oldPassword);
  console.log("req.body.newPassword=" + req.body.newPassword);

  user.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.oldPassword,
        user.password
      );

      if (!passwordIsValid) {
        console.log("Invalid OldPassword!");
        return res.status(401).send({
          accessToken: null,
          message: "Invalid OldPassword!"
        });
      }

      var newEncryptedPassword = bcrypt.hashSync(req.body.newPassword, 8);

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      user.update(
        { password: newEncryptedPassword },
        { where: { id: user.id } }
      ).then(user => {
        console.log("user=" + user);
        res.status(200).send({accessToken: token});
      }).err(err => {
        res.status(500).send({ message: err.message });
      });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
