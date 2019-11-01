var mongoose = require('./mongoose')

var SubScriptionSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    company: {
        type: String
    },

    type: {
        type: String
    },

    // buyer

    interestProducts: {
        type: String
    },

    demandVolume: {
        type: String
    },

    price: {
        type: String
    },

    // seller

    mwInstalled: {
        type: String
    },

    renewableType: {
        type: String
    },

    expectedPrice: {
        type: String
    },

    created: {
        type: Date
    }

}, { collection: 'SubScription' })

var SubScription = mongoose.model('SubScription', SubScriptionSchema)

module.exports = SubScription
