var Routes = require('express').Router();
var Region = require('../models/orders_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Region.find({}, function(err, regions) {
        if (err) {
            res.send('There was an error getting Users');
            throw err;
        } else {
            if (regions == null) {
                res.send('Region not found !!!');
            } else {
                res.send(JSON.stringify(regions));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Region.findById(id, function(err, region) {
        if (err) {
            throw err;
        } else {
            if (region == null) {
                res.send('Region not found !!!');
            } else {
                res.send(JSON.stringify(region));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var region = new Region();
    region.RegionID = req.body.id;
    region.RegionDescription = req.body.description;

    region.save(function(err, reg) {
        if (err) {
            throw err;
        } else {
            if (reg == null) {
                res.send('Region not found !!!');
            } else {
                console.log('region Save as ' + reg);
                res.send(reg);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Region.findById(req.params.id, function(err, region) {
        if (err) {
            res.send(err);
        } else {
            region.RegionID = req.body.id || region.RegionID;
            region.RegionDescription = req.body.description || region.RegionDescription;

            region.save(function(err, reg) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (reg == null) {
                        res.send('Region not found !!!');
                    } else {
                        res.send(reg);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Region.findByIdAndRemove(req.params.id, function(err, reg) {
        if (err) {
            throw err;
        } else {
            if (reg == null) {
                res.send('Region not found !!!');
            } else {
                res.send(reg);
            }
        }
    });
});

module.exports = Routes;