var Routes = require('express').Router();
var Category = require('../../models/category_model.js');

Routes.get(['/', '/index'], function(req, res) {
    Category.find({}, function(err, categories) {
        if (err) {
            console.log("Error getting categories");
            throw err;
        } else {
            if (categories == null) {
                res.send('Categories not found !!!');
            } else {
                res.send(JSON.stringify(categories));
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    if (id != null) {
        Category.findById(id, function(err, category) {
            if (err) {
                throw err;
            } else {
                if (category == null) {
                    res.send('Category not found !!!');
                } else {
                    res.send(JSON.stringify(category));
                }
            }
        });
    }
});

Routes.get('/name/:name', function(req, res) {
    var name = req.params.name;
    if (name != null) {
        Category.findOne({ "CategoryName": name }, function(err, category) {
            if (err) {
                throw err;
            } else {
                if (category == null) {
                    res.send('Category not found !!!');
                } else {
                    res.send(JSON.stringify(category));
                }
            }
        });
    }

});

Routes.post('/', function(req, res) {
    var newCategory = new Category();
    newCategory.Id = req.body.Id;
    newCategory.CategoryName = req.body.categoryname;
    newCategory.Description = req.body.description;

    newCategory.save(function(err, category) {
        if (err) {
            throw err;
        } else {
            if (category == null) {
                res.send('Category not found !!!');
            } else {
                console.log('category saved as ' + category);
                res.send(category);
            }
        }
    });
});

Routes.put('/:id', function(req, res) {
    Category.findById(req.params.id, function(err, category) {
        if (err) {
            res.send(err);
        } else {
            category.Id = req.body.Id || category.Id;
            category.CategoryName = req.body.categoryname || category.CategoryName;
            category.Description = req.body.description || category.Description;
            category.save(function(err, category) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (category == null) {
                        res.send('Category not found !!!');
                    } else {
                        res.send(category);
                    }
                }
            });
        }
    });
});

Routes.delete('/:id', function(req, res) {
    Category.findByIdAndRemove(req.params.id, function(err, category) {
        if (err) {
            throw err;
        } else {
            if (category == null) {
                res.send('Category not found !!!');
            } else {
                res.send(category);
            }
        }
    });
});

module.exports = Routes;