var mongoose = require('./mongoose')

var ContactUsSchema = new mongoose.Schema({

    topic: {
        type: String
    },

    name: {
        type: String
    },

    email: {
        type: String
    },

    message: {
        type: String
    },



}, { collection: 'ContactUs' })

var ContactUs = mongoose.model('ContactUs', ContactUsSchema)

module.exports = ContactUs
