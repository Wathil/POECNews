const article = require("../models").article;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getArticlesWithLimitAndOffset(ctx) { // POST http://localhost:8080/articles/ https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group
        const obj = ctx.request.body; // {"limit":2, "offset":3} => Les 2 premiers à partir du troisième
        let limit = obj.limit; console.log("limit=" + limit);
        let offset = obj.offset; console.log("offset=" + offset);
        try {
            const articleCollection = await article.findAll({ limit, offset });
            ctx.status = 201;
            ctx.body = articleCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        };
    },
    async getArticles(ctx) { // GET http://localhost:8080/articles/
        try {
            const articleCollection = await article.findAll();
            ctx.status = 201;
            ctx.body = articleCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async getArticle(ctx) { // GET http://localhost:8080/articles/:id
        const id = ctx.params.id;
        try {
            const articleCollection = await article.findOne({
                where: { id: id }
            });
            ctx.status = 201;
            ctx.body = articleCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async addArticle(ctx) { // POST http://localhost:8080/articles/add/
        try {
            const obj = ctx.request.body;
            const newArticle = await article.create(obj);
            ctx.status = 201;
            ctx.body = newArticle;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async deleteArticle(ctx) { // DELETE http://localhost:8080/articles/:id
        const id = ctx.params.id;
        try {
            const deletedArticle = await article.findOne(({
                where: { id: id }
            }));
            if (deletedArticle) {
                deletedArticle.destroy();
                ctx.status = 201;
                ctx.body = "Deleted";
            }
            else {
                ctx.status = 404;
                ctx.body = "Article:" + id + " Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async updateArticle(ctx) { // PUT http://localhost:8080/articles/:id
        const id = ctx.params.id;
        try {
            const articleCollection = await article.findOne(({
                where: { id: id }
            }));
            if (articleCollection) {
                const updatedArticle = await article.update(ctx.request.body, {
                    where: { id: id }
                })
                ctx.status = 201;
                ctx.body = updatedArticle;
            }
            else {
                ctx.status = 404;
                ctx.body = "Article:" + id + " Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    }
}