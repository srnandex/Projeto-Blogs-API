const express = require('express');

const routerLo = require('./routers/loginRouter');
const routerUser = require('./routers/userRouter');
const routerCat = require('./routers/categorieRouter');
const routerPost = require('./routers/postRouter');
// ...

const app = express();

app.use(express.json());

app.use('/login', routerLo);
app.use('/user', routerUser);
app.use('/categories', routerCat);
app.use('/post', routerPost);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
