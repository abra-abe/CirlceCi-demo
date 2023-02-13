const express = require('express');
const app = express();

//setting up the view engine
app.set('view-engine', 'ejs');

//Api endpoint that gets the home page
app.get('/', (req, res) => {
    res.render('index.js')
})

module.exports = app