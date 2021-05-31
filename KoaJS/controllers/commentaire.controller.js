const commentaire = require("../models").commentaire;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getCommentairesByUserId(ctx) { // GET http://localhost:8080/commentaires/byuserid/ https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group
        try {
            const userIdParam = ctx.params.id;
            const commentaireCollection = await commentaire.findAll(({
                where: { userId: userIdParam }
            }));
            ctx.status = 201;
            ctx.body = commentaireCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async getCommentairesByArticleId(ctx) { // GET http://localhost:8080/commentaires/byarticleid/:id
        const articleIdParam = ctx.params.id;
        try {
            const commentaireCollection = await commentaire.findAll({
                where: { articleId: articleIdParam }
            });
            ctx.status = 201;
            ctx.body = commentaireCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async getCommentaire(ctx) { // GET http://localhost:8080/commentaires/:id
        const id = ctx.params.id;
        try {
            const commentaireCollection = await commentaire.findOne({
                where: { id: id }
            });
            ctx.status = 201;
            ctx.body = commentaireCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async addCommentaire(ctx) { // POST http://localhost:8080/commentaires/add/
        try {
            const obj = ctx.request.body;
            console.log(obj);
            const newCommentaire = await commentaire.create(obj);
            ctx.status = 201;
            ctx.body = newCommentaire;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async deleteCommentaire(ctx) { // DELETE http://localhost:8080/commentaires/:id
        const id = ctx.params.id;
        try {
            const deletedCommentaire = await commentaire.findOne(({
                where: { id: id }
            }));
            if (deletedCommentaire) {
                deletedArticle.destroy();
                ctx.status = 201;
                ctx.body = "Deleted";
            }
            else {
                ctx.status = 404;
                ctx.body = "Commentaire:" + id + " Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async updateCommentaire(ctx) { // PUT http://localhost:8080/commentaires/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const commentaireCollection = await commentaire.findOne(({
                where: { id: id }
            }));
            if (commentaireCollection) {
                const updatedCommentaire = await commentaire.update(ctx.request.body, {
                    where: { id: id }
                })
                ctx.status = 201;
                ctx.body = updatedCommentaire;
            }
            else {
                ctx.status = 404;
                ctx.body = "Commentaire:" + id + " Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    }
}