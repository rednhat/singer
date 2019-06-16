const express = require('express');
const {Singer, arraySinger, avatarLink, profileLink } = require('../models/singer');
const app = express();
const router = express.Router();
app.set('view engine', 'ejs');
app.use(express.static('./images'));

router.get('/', (req, res) => {
    res.render('index', {arraySinger, avatarLink, profileLink});
})
router.get('/delete/:id', (req,res) => {
    const id = req.params.id;
    const index = arraySinger.findIndex(singer => singer._id == id);
    if(index < 0){
        return res.send({error: "Không tìm thấy singer"});
    }
    arraySinger.splice(index, 1);
    res.redirect('/');
})
router.get('/update/:id', (req,res) => {
    const id = req.params.id;
    const singer = arraySinger.find(singer => singer._id = id);
    res.render('update', {singer, avatarLink, profileLink});
});
router.post('/update/:id', (req,res) =>{
    const id = req.params.id;
    const uSinger = req.body;
        uSinger._id = +id;
        // console.log(uSinger);
    const index = arraySinger.findIndex(singer => singer._id == id);
    arraySinger.splice(index, 1, uSinger);
    res.redirect('/');
});
router.post('/addSinger', (req,res) => {
    
    const singer = req.body;
    const id = singer._id;
    const index = arraySinger.findIndex(singer => singer._id == id);
    console.log(id, index);
    if(index>=0){
        return res.send({error: "id already exists!"})
    }
    arraySinger.push(singer);
    res.redirect('/');
})

module.exports = router;

// app.listen(3000,'Server is running!');