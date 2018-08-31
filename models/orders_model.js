var mongoose = require('mongoose');

var ordersSchema = mongoose.Schema({
    OrderId: { Type: Number },
    CustomerId: { Type: String },
    EmployeeId: { Type: Number },
    OrderDate: { Type: Date },
    RequiredDate: { Type: Date },
    ShippedDate: { Type: Date },
    ShipVia: { Type: Number },
    Freight: { Type: Number },
    ShipName: { Type: String },
    ShipAddress: { Type: String },
    ShipCity: { Type: String },
    ShipRegion: { Type: String },
    ShipPostalCode: { Type: Number },
    ShipCountry: { Type: String }
});
ordersSchema.set('collection', 'order');

module.exports = mongoose.model('Order', ordersSchema);