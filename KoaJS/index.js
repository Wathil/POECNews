const Koa = require("koa");
// const cors = require("cors");
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const db = require("./models");

const redacteur = db.redacteur;

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
    redacteur.create({
        //id: 1,
        userlogin: "userlogin",
        passwd: "passwd",
        penname: "test rédacteur",
        accredit: 0
    });
}

require('./routes/redacteur.routes')(router);

app
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server ExpressJS is running on port ${PORT}.`);
});