var Routes = require('express').Router();
var Product = require('../models/products_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Product.find({}, function(err, products) {
        if (err) {
            res.send('There was an error getting Users');
            throw err;
        } else {
            if (products == null) {
                res.send('Product not found !!!');
            } else {
                res.render('products', { "title": "Products", products: products });
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    Product.findById(id, function(err, product) {
        if (err) {
            throw err;
        } else {
            if (product == null) {
                res.send('Product not found !!!');
            } else {
                res.send(JSON.stringify(product));
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var product = new Product();
    product.ProductId = req.body.id;
    product.ProductName = req.body.productname;
    product.SupplierId = req.body.supplierid;
    product.CategoryId = req.body.categoryid;
    product.QuantityPerUnit = req.body.quantityperunit;
    product.UnitPrice = req.body.unitprice;
    product.UnitsInStock = req.body.unitinstock;
    product.UnitsOnOrder = req.body.unitinstock;
    product.ReorderLevel = req.body.reorderlevel;
    product.Discontinued = req.body.discontinued;

    product.save(function(err, prod) {
        if (err) {
            throw err;
        } else {
            if (prod == null) {
                res.send('Product not found !!!');
            } else {
                console.log('Product Save as ' + prod);
                res.send(prod);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            res.send(err);
        } else {
            product.ProductId = req.body.id || product.ProductId;
            product.ProductName = req.body.productname || product.ProductName;
            product.SupplierId = req.body.supplierid || product.SupplierId;
            product.CategoryId = req.body.categoryid || product.CategoryId;
            product.QuantityPerUnit = req.body.quantityperunit || product.QuantityPerUnit;
            product.UnitPrice = req.body.unitprice || product.UnitPrice;
            product.UnitsInStock = req.body.unitinstock || product.UnitsInStock;
            product.UnitsOnOrder = req.body.unitinstock || product.UnitsOnOrder;
            product.ReorderLevel = req.body.reorderlevel || product.ReorderLevel;
            product.Discontinued = req.body.discontinued || product.Discontinued;

            product.save(function(err, prod) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (prod == null) {
                        res.send('Product not found !!!');
                    } else {
                        res.send(prod);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, product) {
        if (err) {
            throw err;
        } else {
            if (product == null) {
                res.send('Product not found !!!');
            } else {
                res.send(product);
            }
        }
    });
});

module.exports = Routes;