// const express = require('express');
// const app = express();
const app = require('express')();
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({
    type: 'application/json'
}))

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home');
})
app.get('/signin', (req, res)=>{
    res.render('signin');
})
app.post('/login', (req, res)=>{
    // const email = req.body.email;
    // const password = req.body.password;
    const {email, password} = req.body; 
    res.setHeader('token', '2345')
    res.send({email, password});
});
app.listen(3001,()=>{
    console.log(`Server start on 3000!`);
})