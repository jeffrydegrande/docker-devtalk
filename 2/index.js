var express = require('express')
var app = express()

app.listen(3000, function() {
        console.log( "Starting ... ")
})

app.get("/", function(req,res,next) {
    return res.json({"message": "hello world"})
})
