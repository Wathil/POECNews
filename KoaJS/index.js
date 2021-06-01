const Koa = require("koa");
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const db = require("./models");

const user = db.user;
const article = db.article;
const category = db.category;
const commentaire = db.commentaire;

db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-sync db.");
        user1();
    });

function user1() {
    const user1 = user.create({ // USER
        //id: 1, // AUTO INCREMENT
        loginName: "r",
        email: "1",
        password: "1",
        accredit: 1,
        category: '0' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user1 inserted");
        user2();
    }));
}
function user2() {
    const user2 = user.create({ // USER
        //id: 2, // AUTO INCREMENT
        loginName: "r1",
        email: "truc1@machin.com",
        password: "123456",
        accredit: 1,
        category: '1' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user2 inserted");
        user3();
    }));
}
function user3() {
    const user3 = user.create({ // USER
        //id: 3, // AUTO INCREMENT
        loginName: "r2",
        email: "truc2@machin.com",
        password: "123456",
        accredit: 0,
        category: '1' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user3 inserted");
        user4();
    }));
}
function user4() {
    const user4 = user.create({
        //id: 4, // AUTO INCREMENT
        loginName: "admin1",
        email: "truc3@machin.com",
        password: "123456",
        accredit: 1,
        category: '0' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user4 inserted");
        user5();
    }));
}
function user5() {
    const user5 = user.create({
        //id: 5, // AUTO INCREMENT
        loginName: "admin2",
        email: "truc4@machin.com",
        password: "123456",
        accredit: 1,
        category: '0' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user5 inserted");
        user6();
    }));
}
function user6() {
    const user6 = user.create({
        //id: 6, // AUTO INCREMENT
        loginName: "user1",
        email: "truc5@machin.com",
        password: "123456",
        accredit: 0,
        category: '2' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user6 inserted");
        user7();
    }));
}
function user7() {
    const user6 = user.create({
        //id: 6, // AUTO INCREMENT
        loginName: "7",
        email: "7",
        password: "7",
        accredit: 0,
        category: '1' // Admin; Rédacteur; Utilisateur
    }).then((() => {
        console.log("user7 inserted");
        category1();
    }));
}
function category1() {
    const category1 = category.create({
        // id: 1 // AUTO INCREMENT
        tag: "tag1",
        description: "description du tag1"
    }).then((() => {
        console.log("category1 inserted");
        category2();
    }));
}
function category2() {
    const category2 = category.create({
        // id: 2 // AUTO INCREMENT
        tag: "tag2",
        description: "description du tag2"
    }).then((() => {
        console.log("category2 inserted");
        article1();
    }));
}
function article1() {
    const article1 = article.create({
        //id: 1 // AUTO INCREMENT
        userId: 2,
        categoryId: 1,
        titre: "Titre 1",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/madison.jpg"
    }).then((() => {
        console.log("article1 inserted");
        article2();
    }));
}
function article2() {
    const article2 = article.create({
        //id: 2 // AUTO INCREMENT
        userId: 2,
        categoryId: 2,
        titre: "Titre 2",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/madison.jpg"
    }).then((() => {
        console.log("article2 inserted");
        article3();
    }));
}
function article3() {
    const article3 = article.create({
        //id: 3 // AUTO INCREMENT
        userId: 3,
        categoryId: 1,
        titre: "Titre 3",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/madison.jpg"
    }).then((() => {
        console.log("article3 inserted");
        article4();
    }));
}
function article4() {
    const article4 = article.create({
        //id: 4 // AUTO INCREMENT
        userId: 3,
        categoryId: 2,
        titre: "Titre 4",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/madison.jpg"
    }).then((() => {
        console.log("article4 inserted");
        article5();
    }));
}
function article5() {
    const article5 = article.create({
        //id: 5 // AUTO INCREMENT
        userId: 2,
        categoryId: 1,
        titre: "Titre 5",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/madison.jpg"
    }).then((() => {
        console.log("article5 inserted");
        article6();
    }));
}
function article6() {
    const article6 = article.create({
        //id: 6 // AUTO INCREMENT
        userId: 3,
        categoryId: 2,
        titre: "Titre 6",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.",
        urlImage: "./assets/img/madison.jpg"
    }).then((() => {
        console.log("article6 inserted");
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
        userId : 6,
        articleId : 1,
        contenu: "commentaire 1 A"
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

const cors = require('@koa/cors');
app.use(cors());

const bodyParser = require('koa-bodyparser');
app.use(bodyParser()); // JSON integrated

require('./routes/user.routes')(router);
require('./routes/article.routes')(router);
require('./routes/category.routes')(router);
require('./routes/commentaire.routes')(router);

app
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server ExpressJS is running on port ${PORT}.`);
});