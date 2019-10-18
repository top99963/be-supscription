var mongoose = require('./mongoose')

var SubScripeSchema = new mongoose.Schema({

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
    }

}, { collection: 'SubScripe' })

var SubScripe = mongoose.model('SubScripe', SubScripeSchema)

module.exports = SubScripe
