import * as koa from 'koa'
import * as koaRouter from 'koa-router';


export class Server {
    app: koa;
    router: koaRouter;

    constructor(router: koaRouter) {
        this.router = router;
        this.app = new koa();
    }

    start = () => {
        this.applyMiddlewares();
        this.app.listen(3000);
    };

    applyMiddlewares = () => {
        this.app
            .use(this.router.routes())
            .use(this.router.allowedMethods());
    };
}