const express = require('express');
const app = express();
const port = 3000;

const bdBigBangTheory = require('./json/bd_bbt.js');
const bdSupernatural = require('./json/bd_sn.js');
const bdStrangerThings = require('./json/bd_st.js');

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {banco: [bdBigBangTheory, bdSupernatural, bdStrangerThings]});
})

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
})