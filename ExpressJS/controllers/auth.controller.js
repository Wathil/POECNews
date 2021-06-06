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
        Role.findAll({
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
        // user role = 0 utilisateur
        user.setRoles([0]).then(() => {
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

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var lesRoles = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          lesRoles.push("ROLE_" + roles[i].name.toUpperCase()); // !
          console.log("roles[i].name=" + roles[i].name);
        }
        res.status(200).send({
          id: user.id,
          loginName: user.loginName,
          email: user.email,
          accredit: user.accredit,
          roles: lesRoles,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
