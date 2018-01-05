const Koa = require('koa');
const views = require('koa-views')
const serve = require('koa-static');
const path = require('path')
const app = new Koa();

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

app.use(serve(path.join(__dirname, '/build')));

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
});

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');