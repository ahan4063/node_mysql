var Routes = require('express').Router();
var OrderDetails = require('../../models/order_detail_model.js');

Routes.get(['/', '/index'], function(req, res) {
    OrderDetails.find({}, function(err, details) {
        if (err) {
            console.log("Error getting categories");
            throw err;
        } else {
            if (details == null) {
                res.send('Order Details not found !!!');
            } else {
                res.send(JSON.stringify(details));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    OrderDetails.findById(id, function(err, details) {
        if (err) {
            throw err;
        } else {
            if (details == null) {
                res.send('Order Details not found !!!');
            } else {
                res.send(JSON.stringify(details));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var details = new OrderDetails();
    details.OrderDetailId = req.body.id;
    details.OrderId = req.body.orderid;
    details.ProductId = req.body.productid;
    details.UnitPrice = req.body.unitprice;
    details.Quantity = req.body.quatity;
    details.Discount = req.body.discount;

    details.save(function(err, detail) {
        if (err) {
            throw err;
        } else {
            if (detail == null) {
                res.send('Order Details not found !!!');
            } else {
                console.log('Order-Details Save as ' + detail);
                res.send(detail);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    OrderDetails.findById(req.params.id, function(err, details) {
        if (err) {
            res.send(err);
        } else {
            details.OrderDetailId = req.body.id || details.OrderDetailId;
            details.OrderId = req.body.orderid || details.OrderId;
            details.ProductId = req.body.productid || details.ProductId;
            details.UnitPrice = req.body.unitprice || details.UnitPrice;
            details.Quantity = req.body.quatity || details.Quantity;
            details.Discount = req.body.discount || details.Discount;

            details.save(function(err, details) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (details == null) {
                        res.send('Order Details not found !!!');
                    } else {
                        res.send(details);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    OrderDetails.findByIdAndRemove(req.params.id, function(err, details) {
        if (err) {
            throw err;
        } else {
            if (details == null) {
                res.send('Order Details not found !!!');
            } else {
                res.send(details);
            }
        }
    });
});

module.exports = Routes;