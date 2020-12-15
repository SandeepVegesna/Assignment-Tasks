var express = require("express");
var router = express.Router();
var accountsModel = require('../models/accounts');

router.get('/createAccount/:id', function(req, res) {
    var data = {};
    data.customerId = req.params.id;
    data.ccCardType = "Visa";
    data.ccNumber = "422333******0860";
    data.ccFirstSix = 422333;
    data.ccLastFour = 0860;
    accountsModel.create(data).then(function(alert) {
        res.json({
            "status": "Data Inserted"
        });
    });
});

router.get('/getAccount/:id', function(req, res) {
    var data = {};
    data.customerId = req.params.id;
    accountsModel.findAll({
        where: {
            customerId: data.customerId
        }
    })
        .then(function (output) {
            if(output) {
                res.json({
                    "status": "Data Fetched"
                });
            }
        });
});


module.exports = router;