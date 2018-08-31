var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var catSchema = new Schema({
    CategoryId: {
        Type: Number
    },
    CategoryName: {
        Type: String
    },
    Description: {
        Type: String
    }
});
catSchema.set('collection', 'category');


module.exports = mongoose.model('Category', catSchema);