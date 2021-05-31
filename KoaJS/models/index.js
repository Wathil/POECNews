const dbConfig = require("./../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize);
db.article = require('./article.model')(sequelize, Sequelize);
db.category = require('./category.model')(sequelize, Sequelize);
db.commentaire = require('./commentaire.model')(sequelize, Sequelize);

db.article.belongsTo(db.user, { foreignKey: 'userId' });
db.article.belongsTo(db.category, { foreignKey: 'categoryId' });

db.commentaire.belongsTo(db.user, { foreignKey: 'userId' });
db.commentaire.belongsTo(db.article, { foreignKey: 'articleId' });

module.exports = db;