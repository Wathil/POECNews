// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const redacteur = sequelize.define('redacteur', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        userlogin: {
            type: Sequelize.STRING
        },
        passwd: {
            type: Sequelize.STRING
        },
        penname: {
            type: Sequelize.STRING
        },
        accredit: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'redacteur' // Sinon sequelize prend POECNewsDBMySQL.redacteurs SELECT `id`, `userlogin`, `passwd`, `penname`, `accredit`, `createdAt`, `updatedAt` FROM `redacteurs` AS `redacteur`;
    });
    return redacteur;
}