const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to Database...");
})

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);


app.listen(3000, () => {
    console.log("Server Started...");
});