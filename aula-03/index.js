const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('views', './views');
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/usuario', (req, res) => {
    res.send('<h1>Não tem usuário!!!!!!!!!!!!!!!</h1>');
})

app.get('/ab+cd', (req, res) => {
    res.send('ab+cd');
})

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd');
})

app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
})

app.get('/user/:userId/books/:bookId', (req, res) => {
    res.send(`<h1>User: ${req.params.userId}</h1> <h2>Book: ${req.params.bookId}`);
})

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});