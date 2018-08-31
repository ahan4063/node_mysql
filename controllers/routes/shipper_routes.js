var Routes = require('express').Router();
var Shipper = require('../models/shipper_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Shipper.find({}, function(err, shipper) {
        if (err) {
            res.send('There was an error getting Users');
            throw err;
        } else {
            if (shipper == null) {
                res.send('Shipper not found !!!');
            } else {
                res.send(JSON.stringify(shipper));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Shipper.findById(id, function(err, shipper) {
        if (err) {
            throw err;
        } else {
            if (shipper == null) {
                res.send('Shipper not found !!!');
            } else {
                res.send(JSON.stringify(shipper));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var shipper = new Shipper();
    shipper.ShipperID = req.body.id;
    shipper.CompanyName = req.body.companyname;
    shipper.Phone = req.body.phone;

    shipper.save(function(err, ship) {
        if (err) {
            throw err;
        } else {
            if (ship == null) {
                res.send('Shipper not found !!!');
            } else {

                console.log('Shipper Save as ' + ship);
                res.send(ship);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Shipper.findById(req.params.id, function(err, shipper) {
        if (err) {
            res.send(err);
        } else {
            shipper.ShipperID = req.body.id || shipper.ShipperID;
            shipper.CompanyName = req.body.companyname || shipper.CompanyName;
            shipper.Phone = req.body.phone || shipper.Phone;

            shipper.save(function(err, ship) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (ship == null) {
                        res.send('Shipper not found !!!');
                    } else {
                        res.send(ship);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Shipper.findByIdAndRemove(req.params.id, function(err, ship) {
        if (err) {
            throw err;
        } else {
            if (ship == null) {
                res.send('Shipper not found !!!');
            } else {
                res.send(ship);
            }
        }
    });
});

module.exports = Routes;