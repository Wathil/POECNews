const Koa = require("koa");
// const cors = require("cors");
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const db = require("./models");

const user = db.user;

db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-sync db.");
        initial();
    });

const cors = require('@koa/cors');
app.use(cors());

const bodyParser = require('koa-bodyparser');
app.use(bodyParser()); // JSON integrated

function initial() {
    user.create({ // USER
        //id: 1, // AUTO INCREMENT
        loginName: "r1",
        email: "truc1@machin.com",
        password: "123456",
        penName: "test rédacteur 1",
        accredit: 1,
        category: 1 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    user.create({ // USER
        //id: 1, // AUTO INCREMENT
        loginName: "r2",
        email: "truc2@machin.com",
        password: "123456",
        penName: "test rédacteur 2",
        accredit: 0,
        category: 1 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    user.create({
        //id: 2, // AUTO INCREMENT
        loginName: "admin1", // pseudo
        email: "truc3@machin.com", 
        password: "123456",
        penName: "test admin 1",
        accredit: 1,
        category: 0 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    user.create({
        //id: 2, // AUTO INCREMENT
        loginName: "admin2", // pseudo
        email: "truc4@machin.com", 
        password: "123456",
        penName: "test admin 2",
        accredit: 1,
        category: 0 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    user.create({
        //id: 2, // AUTO INCREMENT
        loginName: "user1", // pseudo
        email: "truc5@machin.com", 
        password: "123456",
        penName: "test user 1",
        accredit: 0,
        category: 2 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
}

require('./routes/user.routes')(router);

app
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server ExpressJS is running on port ${PORT}.`);
});