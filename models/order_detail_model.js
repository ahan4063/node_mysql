var mongoose = require('mongoose');

var orderDetailsSchema = mongoose.Schema({
    OrderDetailId: { Type: String },
    OrderId: { Type: Number },
    ProductId: { Type: Number },
    UnitPrice: { Type: Number },
    Quantity: { Type: Number },
    Discount: { Type: Number }
});

orderDetailsSchema.set('collection', 'orderdetail');

module.exports = mongoose.model('OrderDetail', orderDetailsSchema);