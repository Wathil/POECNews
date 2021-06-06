module.exports = (sequelize, Sequelize) => {
    const user_role = sequelize.define('user_role', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roleId: {
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        }
    }, {
        tableName: 'user_role'
    });
    return user_role;
};