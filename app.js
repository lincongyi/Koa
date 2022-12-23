const Koa = require("koa");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");

const user = require("./routers/user");
const member = require("./routers/member");
const article = require("./routers/article");

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(user.routes()).use(user.allowedMethods());
app.use(member.routes()).use(member.allowedMethods());
app.use(article.routes()).use(article.allowedMethods());

app.listen(3000, () => {
  console.log("running ...");
});
