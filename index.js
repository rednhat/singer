const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const singerRouter = require('./controllers/singer.router');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use('/', singerRouter);

app.listen(3000, ()=>{
    console.log('Server is running!');
})