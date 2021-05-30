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
        userId :{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'user',
                key: 'id'
            },
        },
        // userId :{
        //     type: Sequelize.INTEGER
        // },
        urlImage: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'article'
    });
    return article;
};