const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

// Get Posts
router.get('/', async (req, res)=>{
    const users = await loadUserCollection();
    res.send(await users.find({}).toArray())
});

router.post('/login', async (req, res)=>{
    const users = await loadUserCollection();
    res.send(await users.findOne({
        account: req.body.account, 
        password: req.body.password
    }))

});

// Add Post
router.post('/register',async (req, res)=>{
    const users = await loadUserCollection();
    await users.insertOne({
        account: req.body.account,
        password: req.body.password,
        friendList: [],
        createdAt: new Date(),
    });
    res.status(201).send();
})

async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://vue-chat:ou8970657@cluster0-shard-00-00.kmjdt.mongodb.net:27017,cluster0-shard-00-01.kmjdt.mongodb.net:27017,cluster0-shard-00-02.kmjdt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13xngm-shard-0&authSource=admin&retryWrites=true&w=majority',{
        useNewUrlParser:true
    });
    return client.db('RussBlog').collection('User');
}
module.exports = router