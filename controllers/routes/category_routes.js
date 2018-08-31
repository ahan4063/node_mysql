var Routes = require('express').Router();
var Category = require('../models/category_model.js');

Routes.get('/', function(req, res) {
    console.log("[/] Get Method");
    Category.find({}, function(err, categories) {
        if (err) {
            console.log("Error getting categories");
            throw err;
        } else {
            if (categories == null) {
                res.send('Categories not found !!!');
            } else {
                res.render('categories', { title: 'Categories', categories: categories });
            }
        }
    });
});

Routes.post('/', function(req, res) {
    console.log("[/] Post Method");
    var newCategory = new Category();
    newCategory.Id = req.body.categoryId;
    newCategory.CategoryName = req.body.categoryName;
    newCategory.Description = req.body.description;

    newCategory.save(function(err, category) {
        if (err) {
            throw err;
        } else {
            if (category == null) {
                res.send('Category not found !!!');
            } else {
                console.log('category saved as ' + category);
                Category.find({}, function(err, categories) {
                    if (err) {
                        console.log("Error getting categories");
                        throw err;
                    } else {
                        if (categories == null) {
                            res.send('Categories not found !!!');
                        } else {
                            res.render('categories', { title: 'Categories', categories: categories });
                        }
                    }
                });
            }
        }
    });
});


Routes.get('/:id', function(req, res) {
    console.log("[/:id] get Method");
    var action = req.params.id;
    if (action.startsWith('new')) {
        res.render('newcategories', { "title": "New Category" });
    } else {
        console.log("[/:id] Get Method");
        var id = req.params.id;
        if (id != null) {
            Category.findById(id, function(err, category) {
                if (err) {
                    throw err;
                } else {
                    if (category == null) {
                        res.send('Category not found !!!');
                    } else {
                        res.render('editcategory', { title: 'Category Details', category: category });
                    }
                }
            });
        }
    }
});

Routes.post('/new', function(req, res) {
    console.log("[/new] post Method");
    var newCategory = new Category();
    newCategory.Id = req.body.CategoryId;
    newCategory.CategoryName = req.body.CategoryName;
    newCategory.Description = req.body.Description;

    newCategory.save(function(err, category) {
        if (err) {
            throw err;
        } else {
            if (category == null) {
                res.send('Category not found !!!');
            } else {
                console.log('category saved as ' + category);
                Category.find({}, function(err, categories) {
                    if (err) {
                        console.log("Error getting categories");
                        throw err;
                    } else {
                        if (categories == null) {
                            res.send('Categories not found !!!');
                        } else {
                            res.render('categories', { title: 'Categories', categories: categories });
                        }
                    }
                });
            }
        }
    });
});


Routes.put('/update', function(req, res) {
    console.log("[/update] put Method");
    Category.findById(req.params.id, function(err, category) {
        if (err) {
            res.send(err);
        } else {
            category.CategoryId = req.body.CategoryId || category.CategoryId;
            category.CategoryName = req.body.CategoryName || category.CategoryName;
            category.Description = req.body.Description || category.Description;
            category.save(function(err, category) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (category == null) {
                        res.send('Categories not found !!!');
                    } else {
                        console.log('category updated as ' + category);
                        Category.find({}, function(err, categories) {
                            if (err) {
                                console.log("Error getting categories");
                                throw err;
                            } else {
                                if (categories == null) {
                                    res.send('Categories not found !!!');
                                } else {
                                    res.render('categories', { title: 'Categories', categories: categories });
                                }
                            }
                        });

                    }
                }
            });
        }
    });
});

Routes.delete('/:id', function(req, res) {
    console.log("[/:id] delete Method");
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