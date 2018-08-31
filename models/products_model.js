var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    ProductId: { Type: Number },
    ProductName: { Type: String },
    SupplierId: { Type: Number },
    CategoryId: { Type: Number },
    QuantityPerUnit: { Type: String },
    UnitPrice: { Type: Number },
    UnitsInStock: { Type: Number },
    UnitsOnOrder: { Type: Number },
    ReorderLevel: { Type: Number },
    Discontinued: { Type: Number }
});
productSchema.set('collection', 'product');

module.exports = mongoose.model('Product', productSchema);