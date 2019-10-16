var router = require('express').Router()
var subscription = require('./schema.subscription')

router.post('/login', function (req, res) {
    var { username, password } = req.body
    if (username === 'ewf' && password === 'solar') {
        res.send('success')
    } else {
        res.status(400).send('error')
    }
})

router.get('/', function (req, res) {
    subscription.find({}, function (err, data) {
        err ? res.status(400).send(err) : res.send(data)
    })
})

router.post('/', function (req, res) {
    var newSubscription = new subscription({
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        type: req.body.type,
        interestProducts: req.body.interestProducts,
        demandVolume: req.body.demandVolume,
        price: req.body.price,
        mwInstalled: req.body.mwInstalled,
        renewableType: req.body.renewableType,
        expectedPrice: req.body.expectedPrice

    })
    newSubscription.save(function (err, data) {
        err ? res.status(400).send(err) : res.send(data)
    })
})

module.exports = router