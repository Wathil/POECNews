// https://sequelize.org/v5/manual/data-types.html

module.exports = (sequelize, Sequelize) => {
    const commentaire = sequelize.define('commentaire', {
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
        articleId :{
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'article',
                key: 'id'
            },
        },
        resId: {
            type: Sequelize.INTEGER
        },
        contenu: {
            type: Sequelize.TEXT
        }
    }, {
        tableName: 'commentaire'
    });
    return commentaire;
};