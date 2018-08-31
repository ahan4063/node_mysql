var mysql = require('mysql');
var Schema = mongoose.Schema;

var systemaccount = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    accesstpe: {
        type: String,
        required: true,
    }
}, { collection: "systemaccount" });

module.exports = mongoose.model('systemaccount', systemaccount);