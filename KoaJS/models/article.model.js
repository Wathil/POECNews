// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define('article', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titre: {
            type: Sequelize.STRING
        },
        contenu: {
            type: Sequelize.TEXT
        },
        author: {
            type: Sequelize.STRING
        },
        urlImage: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'article'
    });
    return article;
};