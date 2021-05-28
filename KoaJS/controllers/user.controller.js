const user = require("../models").user;
const login = require("../models").login;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async login(ctx) {
        const obj = ctx.request.body;
        console.log(obj);
        try {
            const emailPost = obj.email;
            const passwordPost = obj.password;
            const userCollection = await user.findOne(({
                where: {
                    [Op.and]: [
                      { email: emailPost },
                      { password: passwordPost }
                    ]
                  }
            }));
            ctx.status = 201;
            ctx.body = userCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async getUsers(ctx) { // GET http://localhost:8080/users/
        try {
            const userCollection = await user.findAll();
            ctx.status = 201;
            ctx.body = userCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async getUtilisateurs(ctx) { // GET http://localhost:8080/users/utilisateurs/
        try {
            const userCollection = await user.findAll({
                where: { category: 2 }
            });
            ctx.status = 201;
            ctx.body = userCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async getRedacteurs(ctx) { // GET http://localhost:8080/users/redacteurs/
        try {
            const userCollection = await user.findAll({
                where: { category: 1 }
            });
            ctx.status = 201;
            ctx.body = userCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async getUser(ctx) { // GET http://localhost:8080/users/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const userCollection = await user.findOne({
                where: { id: id }
            });
            ctx.status = 201;
            ctx.body = userCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async addUser(ctx) { // POST http://localhost:8080/users/add/
        try {
            const obj = ctx.request.body;
            console.log(obj);
            const newUser = await user.create(obj);
            ctx.status = 201;
            ctx.body = newUser;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async deleteUser(ctx) { // DELETE http://localhost:8080/users/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const deletedUser = await user.findOne(({
                where: { id: id }
            }));
            if (deletedUser) {
                deletedUser.destroy();
                ctx.status = 201;
                ctx.body = "Deleted";
            }
            else {
                ctx.status = 404;
                ctx.body = "User:" + id +" Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async updateUser(ctx) { // PUT http://localhost:8080/users/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const userCollection = await user.findOne(({
                where: { id: id }
            }));
            if (userCollection) {
                const updatedUser = await user.update(ctx.request.body, {
                    where: { id: id }
                })
                ctx.status = 201;
                ctx.body = updatedUser;
            }
            else {
                ctx.status = 404;
                ctx.body = "User:" + id +" Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    }
    
}