// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tag: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
    }, {
        tableName: 'category'
    });
    return category;
};