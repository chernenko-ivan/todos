import * as koa from 'koa';

export const rootHandler: koa.Middleware = context => {
    context.body = 'hello world';
};