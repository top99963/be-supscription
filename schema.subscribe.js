var mongoose = require('./mongoose')

var SubScribeSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    company: {
        type: String
    },

    contactNumber: {
        type: String
    },
    
    type: {
        type: String
    },

    created: {
        type: Date
    }

}, { collection: 'SubScribe' })

var SubScribe = mongoose.model('SubScribe', SubScribeSchema)

module.exports = SubScribe
