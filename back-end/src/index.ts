import {Server} from "./server/server";
import * as koaRouter from "koa-router";

export const router = new koaRouter();

router.get('/', context => {
    console.log(context);
    context.body = 'hello world'
});
const app = new Server(router);

app.start();