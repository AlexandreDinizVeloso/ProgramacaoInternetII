const express = require('express');
const app = express();
const port = 3000;
const days = require('./days.json')

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', days);
})

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
})