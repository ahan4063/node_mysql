var mongoose = require('mongoose');

var employeesSchema = mongoose.Schema({
    EmployeeId: {
        type: Number
    },
    LastName: {
        type: String
    },
    FirstName: {
        type: String
    },
    Title: {
        type: String
    },
    TitleOfCourtesy: {
        type: String
    },
    BirthDate: {
        type: Date
    },
    HireDate: {
        type: Date
    },
    Address: {
        type: String
    },
    City: {
        type: String
    },
    Region: {
        type: String
    },
    PostalCode: {
        type: Number
    },
    Country: {
        type: String
    },
    HomePhone: {
        type: String
    },
    Extension: {
        type: Number
    },
    Photo: {
        type: String
    },
    Notes: {
        type: String
    },
    ReportsTo: {
        type: Number
    },
    PhotoPath: {
        type: String
    }
});

employeesSchema.set('collection', 'employee');

module.exports = mongoose.model('Employee', employeesSchema);