var Routes = require('express').Router();
var Supplier = require('../models/orders_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Supplier.find({}, function(err, supplier) {
        if (err) {
            res.send('There was an error getting Users');
            throw err;
        } else {
            if (supplier == null) {
                res.send('Supplier not found !!!');
            } else {
                res.send(JSON.stringify(supplier));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Supplier.findById(id, function(err, supplier) {
        if (err) {
            throw err;
        } else {
            if (supplier == null) {
                res.send('Supplier not found !!!');
            } else {
                res.send(JSON.stringify(supplier));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var supplier = new Supplier();
    supplier.SupplierID = req.body.id;
    supplier.CompanyName = req.body.companyname;
    supplier.ContactName = req.body.contactname;
    supplier.ContactTitle = req.body.contacttitle;
    supplier.Address = req.body.address;
    supplier.City = req.body.city;
    supplier.Region = req.body.region;
    supplier.PostalCode = req.body.postalcode;
    supplier.Country = req.body.country;
    supplier.Phone = req.body.phone;
    supplier.Fax = req.body.fax;
    supplier.HomePage = req.body.homepage;

    supplier.save(function(err, supply) {
        if (err) {
            throw err;
        } else {
            if (supply == null) {
                res.send('Supplier not found !!!');
            } else {
                console.log('Supplier Save as ' + supply);
                res.send(supply);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Supplier.findById(req.params.id, function(err, supplier) {
        if (err) {
            res.send(err);
        } else {
            supplier.SupplierID = req.body.id || supplier.SupplierID;
            supplier.CompanyName = req.body.companyname || supplier.CompanyName;
            supplier.ContactName = req.body.contactname || supplier.ContactName;
            supplier.ContactTitle = req.body.contacttitle || supplier.ContactTitle;
            supplier.Address = req.body.address || supplier.Address;
            supplier.City = req.body.city || supplier.City;
            supplier.Region = req.body.region || supplier.Region;
            supplier.PostalCode = req.body.postalcode || supplier.PostalCode;
            supplier.Country = req.body.country || supplier.Country;
            supplier.Phone = req.body.phone || supplier.Phone;
            supplier.Fax = req.body.fax || supplier.Fax;
            supplier.HomePage = req.body.homepage || supplier.HomePage;

            supplier.save(function(err, supply) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (supply == null) {
                        res.send('Supplier not found !!!');
                    } else {
                        res.send(supply);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Supplier.findByIdAndRemove(req.params.id, function(err, supplier) {
        if (err) {
            throw err;
        } else {
            if (supply == null) {
                res.send('Supplier not found !!!');
            } else {
                res.send(supplier);
            }
        }
    });
});

module.exports = Routes;