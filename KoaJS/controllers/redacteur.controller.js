const redacteur = require("../models").redacteur;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getRedacteurs(ctx) {
        try {
            const redacteurCollection = await redacteur.findAll();
            ctx.status = 201;
            ctx.body = redacteurCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async AddRedacteur(ctx) {
        try {
            // ctx.request.body // your POST params
            // ctx.params // URL params, like :id
            const obj = ctx.request.body;
            console.log(obj); // OK
            const newRedacteur = await redacteur.create(obj);
            ctx.status = 201;
            ctx.body = newRedacteur;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    }
}