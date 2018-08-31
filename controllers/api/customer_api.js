var Routes = require('express').Router();
var Customer = require('../../models/customer_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Customer.find({}, function(err, customers) {
        if (err) {
            console.log('Error getting all customers');
        } else {
            if (customers == null) {
                res.send('Customer not found !!!');
            } else {
                res.send(JSON.stringify(customers));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Customer.findById(id, function(err, customer) {
        if (err) {
            throw err;
        } else {
            if (customer == null) {
                res.send('Customer not found !!!');
            } else {
                res.send(JSON.stringify(customer));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var cust = new Customer();
    cust.CustomerId = req.body.id;
    cust.ContactName = req.body.contactname;
    cust.ContactTitle = req.body.contacttitle;
    cust.Address = req.body.address;
    cust.City = req.body.city;
    cust.Region = req.body.region;
    cust.PostalCode = req.body.postalcode;
    cust.Country = req.body.country;
    cust.Phone = req.body.phone;
    cust.Fax = req.body.fax;

    cust.save(function(err, customer) {
        if (err) {
            throw err;
        } else {
            if (customer == null) {
                res.send('Customer not found !!!');
            } else {
                console.log('Customer Save as ' + customer);
                res.send(customer);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Customer.findById(req.params.id, function(err, cust) {
        if (err) {
            res.send(err);
        } else {
            cust.CustomerId = req.body.id || cust.CustomerId;
            cust.ContactName = req.body.contactname || cust.ContactName;
            cust.ContactTitle = req.body.contacttitle || cust.ContactTitle;
            cust.Address = req.body.address || cust.Address;
            cust.City = req.body.city || cust.City;
            cust.Region = req.body.region || cust.Region;
            cust.PostalCode = req.body.postalcode || PostalCode;
            cust.Country = req.body.country || cust.country;
            cust.Phone = req.body.phone || cust.Phone;
            cust.Fax = req.body.fax || cust.Fax;

            cust.save(function(err, customer) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (customer == null) {
                        res.send('Customer not found !!!');
                    } else {
                        res.send(customer);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Customer.findByIdAndRemove(req.params.id, function(err, customer) {
        if (err) {
            throw err;
        } else {
            if (customer == null) {
                res.send('Customer not found !!!');
            } else {
                if (customer == null) {
                    res.send('Customer not found !!!');
                } else {
                    res.send(customer);
                }
            }
        }
    });
});

module.exports = Routes;