
//khoi tao singer
class Singer{
    /**
     * 
     * @param {*} _id 
     * @param {*} name 
     * @param {*} avatar 
     * @param {*} link 
     * @param {} singer
     */
    constructor(_id, name, avatar, link){
        this._id = _id;
        this.name = name;
        this.avatar = avatar;
        this.link = link;
    }
    static getSingerById(id){
        return arraySinger.find(singer => singer._id == id);
    }
    static addSinger(singer){
        arraySinger.push(singer);
    }
    static removeSingerById(id){
        let start = arraySinger.findIndex(singer => singer._id == id);
        arraySinger.splice(start,1);
    }
    static updateSingerById(id, updateSinger){
        let start = arraySinger.findIndex(singer => singer._id ==id);
        arraySinger.splice(start,1, updateSinger);
    }
}
let   arraySinger = [
    { _id: 1, name: 'Mr Siro', link: 'Mr-Siro', avatar: 'e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg'},
    { _id: 2, name: 'Hương Tràm', link: 'Huong-Tram', avatar: 'b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg'},
    { _id: 3, name: 'Khắc Việt', link: 'Khac-Viet', avatar: '8/4/84ffbc3c35a04d698f157a129e68d51a_1499686528.jpg'}
];
// let r = Singer.getSingerById(1);
// console.log(r);


module.exports = {Singer, arraySinger};


// arraySinger.forEach(singer => console.log(singer));
// console.log(arraySinger);