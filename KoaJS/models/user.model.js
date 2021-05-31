// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        loginName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING(8)
        },
        accredit: {
            type: Sequelize.INTEGER // Sequelize ne fonctionne pas avec les boolean javascript
        },
        category: {
            type: Sequelize.INTEGER
            // values: ['Admin', 'Rédacteur', 'Utilisateur']
        }
    }, {
        tableName: 'user' // Sinon sequelize prend POECNewsDBMySQL.redacteurs SELECT `id`, `userlogin`, `passwd`,  `accredit`, `createdAt`, `updatedAt` FROM `redacteurs` AS `redacteur`;
    });
    return user;
}