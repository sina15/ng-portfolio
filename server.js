var express = require('express')
var app = express();
var cors = require('cors')

app.use(cors())
app.listen(5000,()=>console.log("Server started"))