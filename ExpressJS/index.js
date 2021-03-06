const express = require("express");
const app = express();

const db = require("./models");

const role = db.role;
const user = db.user;
const article = db.article;
const category = db.category;
const commentaire = db.commentaire;
const user_role = db.user_role;
var bcrypt = require("bcryptjs");

dropDatabase();

function dropDatabase() {
    db.sequelize.query("DROP DATABASE poecnewsdbmysql").then(createDatabase);
}
function createDatabase() {
    db.sequelize.query("CREATE DATABASE poecnewsdbmysql").then(useDatabase);
}
function useDatabase() {
    db.sequelize.query("USE poecnewsdbmysql").then(syncDatabase);
}
function syncDatabase() {
    db.sequelize.sync().then(role1);
}

function role1() {
    const role1 = role.create({
        id: 0,
        name: 'administrateur'
    }).then((() => {
        console.log("role1 inserted");
        role2();
    }));
}
function role2() {
    const role2 = role.create({
        id: 1,
        name: 'redacteur'
    }).then((() => {
        console.log("role2 inserted");
        role3();
    }));
}
function role3() {
    const role3 = role.create({
        id: 2,
        name: 'utilisateur'
    }).then((() => {
        console.log("role3 inserted");
        user1();
    }));
}
function user1() {
    const user1 = user.create({ // USER
        //id: 1, // AUTO INCREMENT
        loginName: "Rédacteur1",
        email: "1",
        password: bcrypt.hashSync("1", 8),
        accredit: 1
    }).then((() => {
        console.log("user1 inserted");
        user_role1();
    }));
}
function user_role1() {
    const user_role1 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "1", // redacteur
        userId: "1"
    }).then((() => {
        console.log("user_role1 inserted");
        user2();
    }));
}
function user2() {
    const user2 = user.create({ // USER
        //id: 2, // AUTO INCREMENT
        loginName: "Rédacteur2",
        email: "r",
        password: bcrypt.hashSync("r", 8),
        accredit: 1
    }).then((() => {
        console.log("user2 inserted");
        user_role2();
    }));
}
function user_role2() {
    const user_role2 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "1", // redacteur
        userId: "2"
    }).then((() => {
        console.log("user_role2 inserted");
        user3();
    }));
}
function user3() {
    const user3 = user.create({ // USER
        //id: 3, // AUTO INCREMENT
        loginName: "Rédacteur3",
        email: "truc2@machin.com",
        password: bcrypt.hashSync("123456", 8),
        accredit: 0
    }).then((() => {
        console.log("user3 inserted");
        user_role3();
    }));
}
function user_role3() {
    const user_role3 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "1", // redacteur
        userId: "3"
    }).then((() => {
        console.log("user_role3 inserted");
        user4();
    }));
}
function user4() {
    const user4 = user.create({
        //id: 4, // AUTO INCREMENT
        loginName: "Admin A",
        email: "a",
        password: bcrypt.hashSync("a", 8),
        accredit: 1
    }).then((() => {
        console.log("user4 inserted");
        user_role4();
    }));
}
function user_role4() {
    const user_role4 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "0", // administrateur
        userId: "4"
    }).then((() => {
        console.log("user_role4 inserted");
        user5();
    }));
}
function user5() {
    const user5 = user.create({
        //id: 5, // AUTO INCREMENT
        loginName: "admin2",
        email: "truc4@machin.com",
        password: bcrypt.hashSync("123456", 8),
        accredit: 1
    }).then((() => {
        console.log("user5 inserted");
        user_role5();
    }));
}
function user_role5() {
    const user_role5 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "0", // administrateur
        userId: "5"
    }).then((() => {
        console.log("user_role5 inserted");
        user6();
    }));
}
function user6() {
    const user6 = user.create({
        //id: 6, // AUTO INCREMENT
        loginName: "Utilisateur U",
        email: "u",
        password: bcrypt.hashSync("u", 8),
        accredit: 0
    }).then((() => {
        console.log("user6 inserted");
        user_role6();
    }));
}
function user_role6() {
    const user_role6 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "2", // utilisateur
        userId: "6"
    }).then((() => {
        console.log("user_role6 inserted");
        user7();
    }));
}
function user7() {
    const user6 = user.create({
        //id: 6, // AUTO INCREMENT
        loginName: "Rédacteur7",
        email: "7",
        password: bcrypt.hashSync("7", 8),
        accredit: 0
    }).then((() => {
        console.log("user7 inserted");
        user_role7();
    }));
}
function user_role7() {
    const user_role7 = user_role.create({ // USER
        //id: 1, // AUTO INCREMENT
        roleId: "1", // redacteur
        userId: "7"
    }).then((() => {
        console.log("user_role7 inserted");
        category1();
    }));
}
function category1() {
    const category1 = category.create({
        // id: 1 // AUTO INCREMENT
        tag: "Sport",
        description: "description du tag Sport"
    }).then((() => {
        console.log("category1 inserted");
        category2();
    }));
}
function category2() {
    const category2 = category.create({
        // id: 2 // AUTO INCREMENT
        tag: "Politique",
        description: "description du tag Politique"
    }).then((() => {
        console.log("category2 inserted");
        category3();
    }));
}
function category3() {
    const category3 = category.create({
        // id: 2 // AUTO INCREMENT
        tag: "Culture",
        description: "description du tag Culture"
    }).then((() => {
        console.log("category3 inserted");
        article1();
    }));
}
function article1() {
    const article0 = article.create({
        //id: 1 // AUTO INCREMENT
        userId: 1,
        categoryId: 3,
        titre: " Les touaregs",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/1.jpg"
    }).then((() => {
        console.log("article1 inserted");
        article2();
    }));
}
function article2() {
    const article1 = article.create({
        //id: 1 // AUTO INCREMENT
        userId: 2,
        categoryId: 1,
        titre: " Euro 2020",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/2.jpg"
    }).then((() => {
        console.log("article2 inserted");
        article3();
    }));
}
function article3() {
    const article2 = article.create({
        //id: 2 // AUTO INCREMENT
        userId: 2,
        categoryId: 2,
        titre: " Fake news",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/3.jpg"
    }).then((() => {
        console.log("article3 inserted");
        article4();
    }));
}
function article4() {
    const article3 = article.create({
        //id: 3 // AUTO INCREMENT
        userId: 3,
        categoryId: 1,
        titre: " NFL",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/4.jpg"
    }).then((() => {
        console.log("article4 inserted");
        article5();
    }));
}
function article5() {
    const article4 = article.create({
        //id: 4 // AUTO INCREMENT
        userId: 3,
        categoryId: 2,
        titre: " Kim Jong-un",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/5.jpg"
    }).then((() => {
        console.log("article5 inserted");
        article6();
    }));
}
function article6() {
    const article5 = article.create({
        //id: 5 // AUTO INCREMENT
        userId: 2,
        categoryId: 1,
        titre: " Roland-Garros",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/6.jpg"
    }).then((() => {
        console.log("article6 inserted");
        article7();
    }));
}
function article7() {
    const article6 = article.create({
        //id: 6 // AUTO INCREMENT
        userId: 3,
        categoryId: 2,
        titre: " Brexit",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/7.jpg"
    }).then((() => {
        console.log("article7 inserted");
        f_commentaire();
    }));
}
function f_commentaire() {
    const commentaire1 = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 1,
        contenu: "commentaire 1"
    });
    const commentaire2 = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 2,
        contenu: "commentaire 2"
    });
    const commentaire3 = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 3,
        contenu: "commentaire 3"
    });
    const commentaire4 = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 4,
        contenu: "commentaire 4"
    });
    const commentaire5 = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 5,
        contenu: "commentaire 5"
    });
    const commentaire6 = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 6,
        contenu: "commentaire 6"
    });
    const commentaire1a = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 1,
        articleId : 1,
        contenu: "commentaire 1 A",
        resId: 1
    });
    const commentaire2a = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 2,
        contenu: "commentaire 2 A"
    });
    const commentaire3a = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 3,
        contenu: "commentaire 3 A"
    });
    const commentaire4a = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 4,
        contenu: "commentaire 4 A"
    });
    const commentaire5a = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 5,
        contenu: "commentaire 5 A"
    });
    const commentaire6a = commentaire.create({
        //id: 1 // AUTO INCREMENT
        userId : 6,
        articleId : 6,
        contenu: "commentaire 6 A"
    });
}

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/user.routes')(app);
require('./routes/article.routes')(app);
require('./routes/category.routes')(app);
require('./routes/commentaire.routes')(app);
require('./routes/access.routes')(app);
require('./routes/auth.routes')(app);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to jwt application." });
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server ExpressJS is running on port ${PORT}.`);
});