var router = require('express').Router()
var subscription = require('./schema.subscription')
var subscribe = require('./schema.subscribe')
var contactUs = require('./schema.contactUs')
var moment = require('moment')

router.post('/login', function (req, res) {
    var { username, password } = req.body
    if (username === 'reacc' && password === 'ptt') {
        res.send('success')
    } else {
        res.status(400).send('error')
    }
})

router.get('/subscribe', function (req, res) {
    if (req.query && req.query.startTime && req.query.endTime) {
        subscribe.find(
            {
                created:
                {
                    $gte: moment(req.query.startTime).startOf('day'),
                    $lte: moment(req.query.endTime).endOf('day')
                }
            }
            , function (err, data) {
                err ? res.status(400).send(err) : res.send(data)
            })
    } else {
        subscribe.find({}, function (err, data) {
            err ? res.status(400).send(err) : res.send(data)
        })
    }
})

router.post('/subscribe', function (req, res) {
    var newSubscribe = new subscribe({
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        contactNumber: req.body.contactNumber,
        type: req.body.type,
        created: new Date
    })

    newSubscribe.save(function (err, data) {
        err ? res.status(400).send(err) : res.send(data)
    })
})

router.get('/subscription', function (req, res) {
    subscription.find({}, function (err, data) {
        err ? res.status(400).send(err) : res.send(data)
    })
})

router.post('/subscription', function (req, res) {
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
        expectedPrice: req.body.expectedPrice,
        created: new Date

    })
    newSubscription.save(function (err, data) {
        err ? res.status(400).send(err) : res.send(data)
    })
})

router.get('/contact_us', function (req, res) {
    if (req.query && req.query.startTime && req.query.endTime) {
        contactUs.find(
            {
                created:
                {
                    $gte: moment(req.query.startTime).startOf('day'),
                    $lte: moment(req.query.endTime).endOf('day')
                }
            }
            , function (err, data) {
                err ? res.status(400).send(err) : res.send(data)
            })
    } else {
        contactUs.find({}, function (err, data) {
            err ? res.status(400).send(err) : res.send(data)
        })
    }
})

router.post('/contact_us', function (req, res) {
    var { topic, name, email, message } = req.body
    var newContactUs = new contactUs({
        topic: topic,
        name: name,
        email: email,
        message: message,
        created: new Date
    })
    newContactUs.save(function (err, data) {
        err ? res.status(400).send(err) : res.send(data)
    })
})

module.exports = router
