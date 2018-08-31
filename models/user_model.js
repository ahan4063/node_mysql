var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isOver21: {
        type: Boolean,
        required: false
    }
});
userSchema.set('collection', 'users');


module.exports = mongoose.model('User', userSchema);