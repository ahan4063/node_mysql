var mongoose = require('mongoose');

var shipperSchema = mongoose.Schema({
    ShipperID: { Type: Number },
    CompanyName: { Type: String },
    Phone: { Type: String }
});
shipperSchema.set('collection', 'shipper');

module.exports = mongoose.model('Shipper', shipperSchema);