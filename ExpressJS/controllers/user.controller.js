const user = require("../models").user;
const login = require("../models").login;
const db = require("../models");
const Op = db.Sequelize.Op;
const user_role = db.user_role;
const role = db.role;
const col = db.sequelize.col;

module.exports = {
    async login(request, res) {
        try {
            const emailPost = request.body.email;
            const passwordPost = request.body.password;
            const userCollection = await user.findOne({
                where: {
                    [Op.and]: [
                      { email: emailPost },
                      { password: passwordPost }
                    ]
                  },
                  attributes: {exclude: ['password']}
            });
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    },
    async getUsers(request, res) { // GET http://localhost:8080/users/
        try { // OK sans password
            const userCollection = await user.findAll({
                  attributes: {exclude: ['password']}
            });
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        }
    },
    async getUtilisateurs(request, res) { // GET http://localhost:8080/users/utilisateurs/
        try { // OK sans password
            const userCollection = await user.findAll({
                include: [{
                    model: role,
                    through: {
                        where: {roleId: 2},
                        attributes: []
                    },
                    required: true
                  }],
                  attributes: ['id', 'loginName', 'email', 'accredit', [col('roles.id'), 'category']]
            });
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        }
    },
    async getRedacteurs(request, res) { // GET http://localhost:8080/users/redacteurs/
        try { // OK sans password
            const userCollection = await user.findAll({
                include: [{
                    model: role,
                    through: {
                        where: {roleId: 1},
                        attributes: []
                    },
                    required: true
                  }],
                  attributes: ['id', 'loginName', 'email', 'accredit', [col('roles.id'), 'category']]
            });
            console.log();
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        }
    },
    async getUser(request, res) { // GET http://localhost:8080/users/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {// OK sans password
            const userCollection = await user.findOne({
                where: { id: id },
                attributes: {exclude: ['password']}
            });
            res.status(201).send(userCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    },
    async addUser(request, res) { // POST http://localhost:8080/users/add/
        try {
            const obj = request.request.body;
            console.log(obj);
            const newUser = await user.create(obj);
            res.status(201).send(newUser);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    },
    async deleteUser(request, res) { // DELETE http://localhost:8080/users/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {
            const deletedUser = await user.findOne(({
                where: { id: id }
            }));
            if (deletedUser) {
                deletedUser.destroy();
                res.status(201).send({message:"Deleted"});
            }
            else {
                res.status(404).send({message:"User:" + id + " Not Found"});
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    },
    async updateUser(request, res) { // PUT http://localhost:8080/users/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {
            const userCollection = await user.findOne({
                where: { id: id }
            });
            const toUpdate = request.body;
            if (toUpdate) {
                delete toUpdate.password;
            }
            if (userCollection) {
                const updatedUser = await user.update(toUpdate, {
                    where: { id: id }
                })
                res.status(201).send(updatedUser);
            }
            else {
                res.status(404).send({message:"User:" + id + " Not Found"});
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    }
    
}