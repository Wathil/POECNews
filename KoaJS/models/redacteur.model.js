// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const redacteur = sequelize.define('redacteur', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        redacteurloginname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        penname: {
            type: Sequelize.STRING
        },
        accredit: {
            type: Sequelize.INTEGER // Sequelize ne fonctionne pas avec les boolean javascript
        }
    }, {
        tableName: 'redacteur' // Sinon sequelize prend POECNewsDBMySQL.redacteurs SELECT `id`, `userlogin`, `passwd`, `penname`, `accredit`, `createdAt`, `updatedAt` FROM `redacteurs` AS `redacteur`;
    });
    return redacteur;
}