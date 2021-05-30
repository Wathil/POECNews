const category = require("../models").category;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getCategories(ctx) { // GET http://localhost:8080/categories/
        try {
            const categoryCollection = await category.findAll();
            ctx.status = 201;
            ctx.body = categoryCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 500;
            ctx.body = e;
        }
    },
    async getCategory(ctx) { // GET http://localhost:8080/categories/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const categoryCollection = await category.findOne({
                where: { id: id }
            });
            ctx.status = 201;
            ctx.body = categoryCollection;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async addCategory(ctx) { // POST http://localhost:8080/categories/add/
        try {
            const obj = ctx.request.body;
            console.log(obj);
            const newCategory = await category.create(obj);
            ctx.status = 201;
            ctx.body = newCategory;
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async deleteCategory(ctx) { // DELETE http://localhost:8080/categories/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const deletedCategory = await category.findOne(({
                where: { id: id }
            }));
            if (deletedCategory) {
                deletedCategory.destroy();
                ctx.status = 201;
                ctx.body = "Deleted";
            }
            else {
                ctx.status = 404;
                ctx.body = "Category:" + id + " Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    },
    async updateCategory(ctx) { // PUT http://localhost:8080/categories/:id
        const id = ctx.params.id;
        console.log("id=" + id);
        try {
            const categoryCollection = await category.findOne(({
                where: { id: id }
            }));
            if (categoryCollection) {
                const updatedCategory = await category.update(ctx.request.body, {
                    where: { id: id }
                })
                ctx.status = 201;
                ctx.body = updatedCategory;
            }
            else {
                ctx.status = 404;
                ctx.body = "Category:" + id + " Not Found";
            }
        }
        catch (e) {
            console.log(e);
            ctx.status = 400;
            ctx.body = e;
        }
    }
}