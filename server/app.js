require('dotenv').config();
const path = require('path');
const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouters = require('./routes/index.routes');

const app = express();
const PORT = 4000;
serverConfig(app);

app.use(express.static(path.join(__dirname, '../server/dist')));
app.use('/', indexRouters);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.listen(PORT, () => { console.log(`Леопарды крутятся , лавешка мутиться) ${PORT}`); });
