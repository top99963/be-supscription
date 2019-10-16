var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')
var router = require('./router') 
var port = 2222

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router)

app.listen(port, () => {
    console.log('Start server at port ' + port)
})

