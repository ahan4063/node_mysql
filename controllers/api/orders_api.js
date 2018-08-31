var Routes = require('express').Router();
var Order = require('../models/orders_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Order.find({}, function(err, orders) {
        if (err) {
            res.send('There was an error getting Users');
            throw err;
        } else {
            if (orders == null) {
                res.send('Order not found !!!');
            } else {
                res.send(JSON.stringify(orders));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Order.findById(id, function(err, order) {
        if (err) {
            throw err;
        } else {
            if (order == null) {
                res.send('Order not found !!!');
            } else {
                res.send(JSON.stringify(order));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var order = new Order();
    order.OrderId = req.body.id;
    order.CustomerId = req.body.customerid;
    order.EmployeeId = req.body.employeeid;
    order.OrderDate = req.body.orderdate;
    order.RequiredDate = req.body.requireddate;
    order.ShippedDate = req.body.shippeddate;
    order.ShipVia = req.body.shipvia;
    order.Freight = req.body.freight;
    order.ShipName = req.body.shipname;
    order.ShipAddress = req.body.shipaddress;
    order.Shipcity = req.body.shipcity;
    order.ShipRegion = req.body.shipregion;
    order.ShipPostalCode = req.body.shippostalcode;
    order.ShipCountry = req.body.shipcountry;

    order.save(function(err, ord) {
        if (err) {
            throw err;
        } else {
            if (ord == null) {
                res.send('Order not found !!!');
            } else {
                console.log('Order Save as ' + ord);
                res.send(ord);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Order.findById(req.params.id, function(err, order) {
        if (err) {
            res.send(err);
        } else {
            order.OrderId = req.body.id || order.OrderId;
            order.CustomerId = req.body.customerid || order.CustomerId;
            order.EmployeeId = req.body.employeeid || order.EmployeeId;
            order.OrderDate = req.body.orderdate || order.OrderDate;
            order.RequiredDate = req.body.requireddate || order.RequiredDate;
            order.ShippedDate = req.body.shippeddate || order.ShippedDate;
            order.ShipVia = req.body.shipvia || order.ShipVia;
            order.Freight = req.body.freight || order.Freight;
            order.ShipName = req.body.shipname || order.ShipName;
            order.ShipAddress = req.body.shipaddress || order.ShipAddress;
            order.Shipcity = req.body.shipcity || order.Shipcity;
            order.ShipRegion = req.body.shipregion || order.ShipRegion;
            order.ShipPostalCode = req.body.shippostalcode || order.ShipPostalCode;
            order.ShipCountry = req.body.shipcountry || order.ShipCountry;

            order.save(function(err, ord) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (ord == null) {
                        res.send('Order not found !!!');
                    } else {
                        res.send(ord);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Order.findByIdAndRemove(req.params.id, function(err, order) {
        if (err) {
            throw err;
        } else {
            if (order == null) {
                res.send('Order not found !!!');
            } else {
                res.send(order);
            }
        }
    });
});

module.exports = Routes;