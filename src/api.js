const express = require('express');

const routerLo = require('./routers/loginRouter');
const routerUser = require('./routers/userRouter');
// ...

const app = express();

app.use(express.json());

app.use('/login', routerLo);
app.use('/user', routerUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
