var mongoose = require('mongoose')
var db = require('./config.json').db

var options = {
    useUnifiedTopology: true,
    autoIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
}

mongoose.connect(db, options).then(function () {
    console.log('Connected to DB')
}, function (err) {
    console.log(err)
})

module.exports = mongoose