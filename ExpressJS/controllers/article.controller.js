const article = require("../models").article;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getArticlesWithLimitAndOffset(request, res) { // POST http://localhost:8080/articles/ https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group
        // {"limit":2, "offset":3} => Les 2 premiers à partir du troisième
        let limit = request.body.limit; console.log("limit=" + limit);
        let offset = request.body.offset; console.log("offset=" + offset);
        try {
            const articleCollection = await article.findAll({ limit, offset, order: [['id', 'DESC']]});
            res.status(201).send(articleCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        };
    },
    async getArticles(request, res) { // GET http://localhost:8080/articles/
        try {
            const articleCollection = await article.findAll({
                order: [['id', 'DESC']]});
            res.status(201).send(articleCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        }
    },
    async getArticlesParCategorie(request, res) { // GET http://localhost:8080/articles/par-categorie/:categoryId
        try {
            const categoryId = request.params.categoryId;
            const articleCollection = await article.findAll({
                where : { categoryId: categoryId },
                order: [['id', 'DESC']]
            });
            res.status(201).send(articleCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        }
    },
    async getArticlesParAuteur(request, res) { // GET http://localhost:8080/articles/par-auteur/:userId
        try {
            const userId = request.params.userId;
            const articleCollection = await article.findAll({
                where : { userId: userId },
                order: [['id', 'DESC']]
            });
            res.status(201).send(articleCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    },
    async getArticle(request, res) { // GET http://localhost:8080/articles/:id
        const id = request.params.id;
        console.log("getArticle " + id);
        try {
            const articleCollection = await article.findOne({
                where: { id: id }
            });
            res.status(201).send(articleCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: e || "Some error occurred"
            });
        }
    },
    async addArticle(request, res) { // POST http://localhost:8080/articles/add/
        try {
            const obj = request.body;
            const newArticle = await article.create(obj);
            res.status(201).send(newArticle);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message:
                    e.message || "Some error occurred"
            });
        }
    },
    async deleteArticle(request, res) { // DELETE http://localhost:8080/articles/:id
        const id = request.params.id;
        try {
            const deletedArticle = await article.findOne(({
                where: { id: id }
            }));
            if (deletedArticle) {
                deletedArticle.destroy();
                res.status(201).send({message:"Deleted"});
            }
            else {
                res.status(404).send({message:"Article:" + id + " Not Found"});
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
    async updateArticle(request, res) { // PUT http://localhost:8080/articles/:id
        const id = request.params.id;
        try {
            const articleCollection = await article.findOne(({
                where: { id: id }
            }));
            if (articleCollection) {
                const updatedArticle = await article.update(request.body, {
                    where: { id: id }
                })
                res.status(201).send(updatedArticle);
            }
            else {
                res.status(404).send({message:"Article:" + id + " Not Found"});
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