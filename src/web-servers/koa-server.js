import Koa from 'koa';
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.type = 'application/json';
  await next();
});
app.use(async (ctx, next) => {
  ctx.body = { name: 'Emir', age: 29 };
  await next();
});
app.use(async (ctx, next) => {
  ctx.cookies.set('trackingId', '123');
});

app.listen(3000, () => {
  colorfulLog(`Koa server is listening on port 3000`);
});
