const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");

const redacteur = db.redacteur;

db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-sync db.");
        initial();
    });

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

function initial() {
    redacteur.create({
        //id: 1,
        userlogin: "userlogin",
        passwd: "passwd",
        penname: "test rédacteur",
        accredit: 0
    });
}

require('./routes/redacteur.routes')(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to POECNews ExpressJS application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server ExpressJS is running on port ${PORT}.`);
});