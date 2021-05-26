const user = require("../models").user;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getUsers(ctx) { // http://localhost:8080/users/
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
    async getUser(ctx) { // http://localhost:8080/users/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const userCollection = await user.findOne({
                where: { id: id }
            })
            ctx.status = 201;
            ctx.body = userCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async addUser(ctx) {
        try {
            // ctx.request.body // your POST params
            // ctx.params // URL params, like :id
            const obj = ctx.request.body;
            console.log(obj); // OK
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
    async deleteUser(ctx) {
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const deletedUser = await user.findOne(({
                where: { id: id }
            }))
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
    async updateUser(ctx) {
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const userCollection = await user.findOne(({
                where: { id: id }
            }))
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