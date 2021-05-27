const Koa = require("koa");
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const db = require("./models");

const user = db.user;
const article = db.article;

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
        loginName: "admin1",
        email: "truc3@machin.com", 
        password: "123456",
        penName: "test admin 1",
        accredit: 1,
        category: 0 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    user.create({
        //id: 2, // AUTO INCREMENT
        loginName: "admin2",
        email: "truc4@machin.com", 
        password: "123456",
        penName: "test admin 2",
        accredit: 1,
        category: 0 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    user.create({
        //id: 2, // AUTO INCREMENT
        loginName: "user1",
        email: "truc5@machin.com", 
        password: "123456",
        penName: "test user 1",
        accredit: 0,
        category: 2 // 0: Admin; 1: Rédacteur; 2: Utilisateur
    });
    article.create({
        //id: 1 // AUTO INCREMENT
        titre: "Titre 1",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.", 
        author: "Author 1",
        urlImage: "./assets/img/madison.jpg"
    });
    article.create({
        //id: 1 // AUTO INCREMENT
        titre: "Titre 2",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.", 
        author: "Author 2",
        urlImage: "./assets/img/madison.jpg"
    });
    article.create({
        //id: 1 // AUTO INCREMENT
        titre: "Titre 3",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.", 
        author: "Author 3",
        urlImage: "./assets/img/madison.jpg"
    });
    article.create({
        //id: 1 // AUTO INCREMENT
        titre: "Titre 4",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.", 
        author: "Author 4",
        urlImage: "./assets/img/madison.jpg"
    });
    article.create({
        //id: 1 // AUTO INCREMENT
        titre: "Titre 5",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.", 
        author: "Author 5",
        urlImage: "./assets/img/madison.jpg"
    });
    article.create({
        //id: 1 // AUTO INCREMENT
        titre: "Titre 6",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut elementum tortor. Praesent ac imperdiet ligula, vel iaculis mauris. Etiam suscipit euismod lacus, id dapibus magna consectetur vel. Donec mollis tempor enim, eu consectetur lacus blandit in. Ut scelerisque diam urna, a aliquet ipsum feugiat sit amet. Nam pretium fringilla tellus, eget fermentum quam aliquam quis. Morbi sagittis dui ligula, ut viverra sem aliquam nec. Nam dolor nunc, venenatis nec orci vitae, bibendum hendrerit nisl. Proin vestibulum urna ex, eget hendrerit lorem pellentesque id. Ut euismod sollicitudin porta. Sed id auctor leo. Sed arcu nibh, sagittis vitae est nec, dignissim luctus dolor. Sed ac ligula sollicitudin, eleifend lacus eu, venenatis est. Vivamus varius a enim vel pretium. Cras fermentum porta lorem, at facilisis diam aliquet et. Sed ut lectus et massa ultrices sagittis.\n\nFusce bibendum turpis eu augue tempus rhoncus. Curabitur hendrerit hendrerit tellus eget feugiat. Duis gravida tempus lacus quis luctus. Cras vel orci pulvinar, sollicitudin lacus quis, bibendum eros. Praesent eget turpis eu dolor dapibus tincidunt non sed massa. Duis dui nunc, semper sed pretium non, sodales eget nisl. Ut condimentum porta mauris. Pellentesque eu efficitur lacus, sit amet gravida enim. Proin pharetra hendrerit est, eget semper tortor viverra nec. Duis ligula neque, tristique non suscipit eget, porta sit amet neque. Cras at mi non massa consectetur vestibulum. Cras mollis tellus leo, ut sagittis risus accumsan sed. Curabitur at erat felis. Curabitur lacinia leo sed lacus lobortis, ut placerat sem vestibulum.\n\nCras vel scelerisque leo, non congue elit. Donec a accumsan risus, in ultricies tortor. Nullam mi leo, tincidunt non urna sit amet, iaculis pulvinar sapien. Etiam tempus, est quis condimentum fringilla, elit risus iaculis tellus, in venenatis mi nibh eget dui. Vivamus tempus volutpat pulvinar. Nullam quis pulvinar leo, in blandit arcu. Cras quis diam quam. Vestibulum eu commodo nisl. Nulla in quam ac sapien tincidunt molestie. In hac habitasse platea dictumst.\n\nProin pretium a quam at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas libero dolor, iaculis id velit nec, pulvinar aliquet est. Pellentesque non nibh posuere, consectetur justo sit amet, semper augue. Sed interdum mi id metus lacinia dignissim. Nulla varius dui ex, sit amet cursus mi sagittis non. Pellentesque nisi massa, finibus sed mauris sed, egestas commodo ligula. Proin at cursus lectus. Donec congue ipsum nec lorem lacinia, ut semper lacus facilisis. Aliquam augue eros, sodales dapibus dui ut, suscipit dignissim urna.\n\nInteger mauris ligula, vehicula sit amet eros in, pretium dictum purus. In sed purus metus. Donec dolor ipsum, malesuada at leo id, molestie sagittis dui. Nulla commodo dui et venenatis aliquet. Nam porta risus felis, vel lacinia enim convallis quis. Nullam molestie erat vitae mauris pharetra lacinia. Quisque rhoncus at tortor ac vulputate. Sed congue mi vitae leo fringilla, quis cursus elit iaculis. Pellentesque lectus neque, efficitur eget hendrerit vel, efficitur vel ante. In dignissim, ex vel bibendum facilisis, dui libero elementum est, et gravida nisl lorem commodo diam. Mauris lacinia efficitur vulputate. Maecenas nec dictum lacus, malesuada pharetra mauris. Suspendisse interdum tincidunt dui quis eleifend.", 
        author: "Author 6",
        urlImage: "./assets/img/madison.jpg"
    });
}

require('./routes/user.routes')(router);
require('./routes/article.routes')(router);

app
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server ExpressJS is running on port ${PORT}.`);
});