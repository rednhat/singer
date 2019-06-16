const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {Singer, arraySinger} = require('./singer');
const profileLink = "https://zingmp3.vn/nghe-si/";
const avatarLink = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/';

app.use(bodyParser.urlencoded({extends:true}))
app.use(express.static('./css'));
app.set('view engine', 'ejs')

app.get('/update/:id', (req, res) => {
    let id = req.params.id;
    let find = new Singer;
        find = Singer.getSingerById(id);
    res.render('update', {find});
})
app.post('/update/:id', (req, res) => {
    let id = req.params.id;
    let updateSinger = req.body;
    updateSinger._id = id;
    Singer.updateSingerById(id, updateSinger);
    // res.render('update', {find});
    res.redirect('..');

})
app.post('/remove/:id', (req, res) => {
    let id = req.params.id;
    Singer.removeSingerById(id);
    res.redirect('..');
})

app.get('/',(req,res) => {
    res.render('singer', {arraySinger, profileLink, avatarLink});
})
app.post('/', (req,res) => {
    const arr = req.body;
    // res.send(arr);
    // console.log(arr);
    Singer.addSinger(arr);
    // arraySinger.push(arr);
    // console.log(arraySinger);
    res.redirect('..');
    // console.log(arraySinger);
})

// app.get('/update/:id', (req,res) => {
//     let id = req.params.id;
//     const find = arraySinger.find(singer => singer._id == id);
//     res.render('update', {find, id});
// })
// app.post('/update/:id', (req, res) => {
//     let arr = req.body;
//     let id = req.params.id;
//     console.log(id);
//     arr._id = +id;
//     console.log(arr);
//     const start = arraySinger.findIndex(singer => singer._id == id);
//     const fin = arraySinger.find(singer => singer._id == id);
//     arraySinger.splice(start,1,arr);

//     res.send('sucess');
// })
    
// app.post('/remove/:id', (req,res) => {
//     let id = req.params.id;
//     console.log(id);
//     let index = arraySinger.findIndex(singer => singer._id == id);
//     console.log(index)
//     arraySinger.splice(index,1);
//     res.redirect('..');
// })

app.listen(3001, ()=>{
    console.log('Sever starting on port 3001')
})