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
            type: Sequelize.STRING(255)
        },
        accredit: {
            type: Sequelize.INTEGER // Sequelize ne fonctionne pas avec les boolean javascript
        }
    }, {
        tableName: 'user'
    });
    return user;
}