const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts.js')
const user = require('./routes/api/user.js')

app.use('/api/posts',posts)
app.use('/api/user',user)

const port = process.env.PORT || 5000

app.listen(port, ()=>console.log('goods'));

