const commentaire = require("../models").commentaire;
const user = require("../models").user;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getCommentairesByUserId(request, res) { // GET http://localhost:8080/commentaires/byuserid/ https://sequelize.org/v5/manual/models-usage.html#manipulating-the-dataset-with-limit--offset--order-and-group
        try {
            const userIdParam = request.params.id;
            const commentaireCollection = await commentaire.findAll(({
                where: { userId: userIdParam }
            }));
            res.status(201).send(commentaireCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred while creating the User."
            });
        }
    },
    async getCommentairesByArticleId(request, res) { // GET http://localhost:8080/commentaires/byarticleid/:id
        const articleIdParam = request.params.id;
        // try {
        //     const commentaireCollection = await commentaire.findAll({
        //         where: { articleId: articleIdParam }
        //     });
        //     res.status(201).send(commentaireCollection);
        // }
        try {
            db.commentaire.findAll({
                include:[
                    {model: db.user
                    }
                ],
                where: { articleId: articleIdParam }
            }).then(commentaire =>{
                const resObjt = commentaire.map(c => {
                    return Object.assign({}, {
                        id: c.id,
                        userId: c.userId,
                        articleId: c.articleId,
                        resId: c.resId,
                        contenu: c.contenu,
                        user: c.user
                    })
                })
                console.log(resObjt);
                res.status(201).send(resObjt);
            })
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: "Some error occurred."
            });
        }
    },
    async getCommentaire(request, res) { // GET http://localhost:8080/commentaires/:id
        const id = request.params.id;
        try {
            const commentaireCollection = await commentaire.findOne({
                where: { id: id }
            });
            res.status(201).send(commentaireCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: "Some error occurred."
            });
        }
    },
    async addCommentaire(request, res) { // POST http://localhost:8080/commentaires/add/
        try {
            const obj = request.body;
            console.log(obj);
            commentaire.create(obj).then(newCommentaire => {
                commentaire.findOne({
                    include: [
                        { model: db.user }
                    ],
                    where: { id: newCommentaire.id }
                }).then(c => {
                    const resObjt =  Object.assign({}, {
                            id: c.id,
                            userId: c.userId,
                            articleId: c.articleId,
                            resId: c.resId,
                            contenu: c.contenu,
                            user: c.user
                        })
                    
                    console.log(resObjt);
                    res.status(201).send(resObjt);
                })
            });
            
            // res.status(201).send(newCommentaire);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: "Some error occurred."
            });
        }
    },
    async deleteCommentaire(request, res) { // DELETE http://localhost:8080/commentaires/:id
        const id = request.params.id;
        try {
            const deletedCommentaire = await commentaire.findOne(({
                where: { id: id }
            }));
            if (deletedCommentaire) {
                deletedArticle.destroy();
                res.status(201).send({message:"Deleted"});
            }
            else {
                res.status(404).send({message:"CategoCommentairery:" + id + " Not Found"});
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: "Some error occurred."
            });
        }
    },
    async updateCommentaire(request, res) { // PUT http://localhost:8080/commentaires/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {
            const commentaireCollection = await commentaire.findOne(({
                where: { id: id }
            }));
            if (commentaireCollection) {
                const updatedCommentaire = await commentaire.update(request.body, {
                    where: { id: id }
                })
                res.status(201).send(updatedCommentaire);
            }
            else {
                res.status(404).send({message:"Commentaire:" + id + " Not Found"});
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