var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var territorySchema = new Schema({
    territoryid: {
        type: Number
    },
    territorydescription: {
        type: String
    },
    regionid: {
        type: Number
    }
}, { collection: 'territory' });


module.exports = mongoose.model('territory', territorySchema);