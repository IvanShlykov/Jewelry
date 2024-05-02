
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouters = require('./routes/index.routes');

const app = express();
const PORT = 4000;
serverConfig(app);
app.use('/', indexRouters);

app.listen(PORT, () => { console.log(`Леопарды крутятся , лавешка мутиться) ${PORT}`); });
