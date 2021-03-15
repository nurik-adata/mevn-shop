const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const routes = require("./src/routes")

//connection to Db
mongoose.connect(
    'mongodb://localhost:27017/mevnshop',
    {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true

    });
//initialization app
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

routes.forEach((item) =>{
    app.use(item, require(`./src/routes/${item}`))
});

// call routes
const PORT = 8000;
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`);