const redacteur = require("../models").redacteur;
const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    async getRedacteurs(req, res) {
        try {
            const redacteurCollection = await redacteur.findAll()
            res.status(201).send(redacteurCollection);
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
}