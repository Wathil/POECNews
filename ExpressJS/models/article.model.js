// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define('article', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId :{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'user',
                key: 'id'
            },
        },
        categoryId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'user',
                key: 'id'
            },
        },
        titre: {
            type: Sequelize.STRING
        },
        contenu: {
            type: Sequelize.TEXT
        },
        urlImage: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'article'
    });
    return article;
};