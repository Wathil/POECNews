const category = require("../models").category;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getCategories(request, res) { // GET http://localhost:8080/categories/
        try {
            const categoryCollection = await category.findAll();
            res.status(201).send(categoryCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send({
                message:
                    e.message || "Some error occurred."
            });
        }
    },
    async getCategory(request, res) { // GET http://localhost:8080/categories/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {
            const categoryCollection = await category.findOne({
                where: { id: id }
            });
            res.status(201).send(categoryCollection);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: "Some error occurred."
            });
        }
    },
    async addCategory(request, res) { // POST http://localhost:8080/categories/add/
        try {
            const obj = request.body;
            console.log(obj);
            const newCategory = await category.create(obj);
            res.status(201).send(newCategory);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                message: "Some error occurred."
            });
        }
    },
    async deleteCategory(request, res) { // DELETE http://localhost:8080/categories/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {
            const deletedCategory = await category.findOne(({
                where: { id: id }
            }));
            if (deletedCategory) {
                deletedCategory.destroy();
                res.status(201).send({message:"Deleted"});
            }
            else {
                res.status(404).send({message:"Category:" + id + " Not Found"});
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
    async updateCategory(request, res) { // PUT http://localhost:8080/categories/:id
        const id = request.params.id;
        console.log("id=" + id);
        try {
            const categoryCollection = await category.findOne(({
                where: { id: id }
            }));
            if (categoryCollection) {
                const updatedCategory = await category.update(request.body, {
                    where: { id: id }
                })
                res.status(201).send(updatedCategory);
            }
            else {
                res.status(404).send({message:"Category:" + id + " Not Found"});
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