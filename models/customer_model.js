var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    CustomerId: {
        Type: String,
    },
    CompanyName: {
        Type: String,
    },
    ContactName: {
        Type: String,
    },
    ContactTitle: {
        Type: String,
    },
    Address: {
        Type: String,
    },
    City: {
        Type: String,
    },
    Region: {
        Type: String,
    },
    PostalCode: {
        Type: Number,
    },
    Country: {
        Type: String,
    },
    Phone: { Type: String },
    Fax: { Type: String }
});
customerSchema.set('collection', 'customer');

module.exports = mongoose.model('Customer', customerSchema);