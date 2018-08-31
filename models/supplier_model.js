var mongoose = require('mongoose');

var suppliersSchema = mongoose.Schema({
    SupplierID: { Type: Number },
    CompanyName: { Type: String },
    ContactName: { Type: String },
    ContactTitle: { Type: String },
    Address: { Type: String },
    City: { Type: String },
    Region: { Type: String },
    PostalCode: { Type: String },
    Country: { Type: String },
    Phone: { Type: String },
    Fax: { Type: String },
    HomePage: { Type: String }
});


suppliersSchema.set('collection', 'spplier');

module.exports = mongoose.model('Supplier', suppliersSchema);