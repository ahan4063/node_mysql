var Routes = require('express').Router();
var User = require('../models/user_model.js');

//// GET REQUESTS /////
// Get All
Routes.get(['/', '/index'], function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            res.send('There was an error getting Users');
            throw err;
        } else {
            if (users == null) {
                res.send('User not found!!!');
            } else {
                res.send(JSON.stringify(users));
            }
        }
    });
});

// Get by Id
Routes.get('/:id', function(req, res) {
    var id = req.params.id;
    if (id != null) {
        User.findById(id, function(err, user) {
            if (err) {
                throw err;
            } else {
                if (user == null) {
                    res.send('User not found!!!');
                } else {
                    res.send(JSON.stringify(user));
                }
            }
        });
    }
});

function getUserById(req) {
    var id = req.params.id;
    if (id != null) {
        User.findById(id, function(err, user) {
            if (err) {
                throw err;
            } else {
                if (user == null) {
                    res.send('User not found!!!');
                } else {
                    console.log(user);
                    return user;
                }
            }
        });
    }
}

function getUserByName(req) {
    var name = req.params.name;
    User.findOne({ "username": name }, function(err, user) {
        if (err) {
            throw err;
        } else {
            if (user == null) {
                res.send('User not found!!!');
            } else {
                return user;
            }
        }
    });
}


// Save new record
Routes.post('/', function(req, res) {
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.isOver21 = req.body.isOver21;

    newUser.save(function(err, user) {
        if (err) {
            throw err;
        } else {
            if (user == null) {
                res.send('User not found!!!');
            } else {
                console.log('user saved as ' + user);
                res.send(user);
            }
        }
    });
});


// update user
Routes.put('/:id', function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log('Update error');
            res.send(err);
        } else {
            user.username = req.body.username || user.username;
            user.password = req.body.password || user.password;
            user.isOver21 = req.body.isOver21 || user.isOver21;
            user.save(function(err, user) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (user == null) {
                        res.send('User not found!!!');
                    } else {
                        res.send(user);
                    }
                }
            });
        }
    });
});

Routes.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) {
            throw err;
        } else {
            if (user == null) {
                res.send('User not found!!!');
            } else {
                res.send(user);
            }
        }
    });
});

module.exports = Routes;