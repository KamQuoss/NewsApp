const express = require('express');// requre to funkcja node, któa poszukuje modułów
const newsapi = require('./newsapi');
const cors = require('cors');// cotam, żeby były te same adresy
const { query } = require('express');

const app = express();
const port = 4000;

app.use(cors())

app.get('/articles', (req, res) => {
    newsapi
    .getArticles(req.query)
    .then(response => {
            res.json(response.body)
        })
})
app.get('/kawa', (req, res) => {
    newsapi
    .getCoffeNews(req.query)
    .then(response => {
            res.json(response.body)
        })
})

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//     res.send('hello world')
//   })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));