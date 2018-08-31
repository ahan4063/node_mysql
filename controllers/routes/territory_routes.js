var Routes = require('express').Router();
var Territory = require('../models/territory_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Territory.find({}, function(err, territories) {
        if (err) {
            res.send('Error getting Employee territories');
            throw err;
        } else {
            if (territories == null) {
                res.send('Territory not found !!!');
            } else {
                res.send(JSON.stringify(territories));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Territory.findById(id, function(err, territory) {
        if (err) {
            throw err;
        } else {
            if (territory == null) {
                res.send('Territory not found !!!');
            } else {
                res.send(JSON.stringify(territory));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var territory = new Territory();
    territory.territoryid = req.body.id;
    territory.territorydescription = req.body.description;
    territory.regionid = req.body.regionid;

    territory.save(function(err, territory) {
        if (err) {
            throw err;
        } else {
            if (territory == null) {
                res.send('Territory not found !!!');
            } else {
                console.log('Territory Save as ' + territory);
                res.send(territory);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Territory.findById(req.params.id, function(err, territory) {
        if (err) {
            res.send(err);
        } else {
            territory.territoryid = req.body.id || territory.territoryid;
            territory.territorydescription = req.body.description || territory.territorydescription;
            territory.regionid = req.body.regionid || territory.regionid;

            territory.save(function(err, territory) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (territory == null) {
                        res.send('Territory not found !!!');
                    } else {
                        res.send(territory);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Territory.findByIdAndRemove(req.params.id, function(err, territory) {
        if (err) {
            throw err;
        } else {
            if (territory == null) {
                res.send('Territory not found !!!');
            } else {
                res.send(territory);
            }
        }
    });
});


module.exports = Routes;