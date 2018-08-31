var Routes = require('express').Router();
var Employees = require('../models/employee-model');

Routes.get(['/', '/index'], function(req, res) {
    Employees.find({}, function(err, employees) {
        if (err) {
            console.log("Error getting categories");
            throw err;
        } else {
            if (employees == null) {
                res.send('Employee not found !!!');
            } else {
                // res.send(JSON.stringify(employees));
res.render('employees',{'title':'Employees', employees:employees});
            }
        }
    });
});

Routes.get('/:id', function(req, res) {
    var employeeid = req.params.id;
    Employees.findById(employeeid, function(err, employee) {
        if (err) {
            throw err;
        } else {
            if (employee == null) {
                res.send('Employee not found !!!');
            } else {
                // res.send(JSON.stringify(employee));
                res.render('editemployee', {"title":"Edit Employee", employee:employee});
            }
        }
    });
});

Routes.post('/:id', function(req, res) {
    var employee = new Employee();
    employee.EmployeeId = req.body.employeeid;
    employee.LastName = req.body.lastname;
    employee.FirstName = req.body.firstname;
    employee.Title = req.body.title;
    employee.TitleOfCourtesy = req.body.titleofcourtesy;
    employee.BirthDate = req.body.birthdate;
    employee.HireDate = req.body.hiredate;
    employee.Address = req.body.address;
    employee.City = req.body.city;
    employee.Region = req.body.region;
    employee.PostalCode = req.body.postalcode;
    employee.Country = req.body.country;
    employee.HomePhone = req.body.homephone;
    employee.Extension = req.body.extension;
    employee.Photo = req.body.photo;
    employee.Notes = req.body.notes;
    employee.ReportsTo = req.body.reportsto;
    employee.PhotoPath = req.body.photopath;

    employee.save(function(err, employee) {
        if (err) {
            throw err;
        } else {
            if (employee == null) {
                res.send('Employee not found !!!');
            } else {
                console.log('Employee Save as ' + employee);
                res.send(employee);
            }
        }
    });
});

Routes.put('/', function(req, res) {
    Customer.findById(req.params.id, function(err, employee) {
        if (err) {
            res.send(err);
        } else {
            employee.EmployeeId = req.body.employeeid || employee.EmployeeId;
            employee.LastName = req.body.lastname || employee.LastName;
            employee.FirstName = req.body.firstname || employee.FirstName;
            employee.Title = req.body.title || employee.Title;
            employee.TitleOfCourtesy = req.body.titleofcourtesy || employee.TitleOfCourtesy;
            employee.BirthDate = req.body.birthdate || employee.BirthDate;
            employee.HireDate = req.body.hiredate || employee.HireDate;
            employee.Address = req.body.address || employee.Address;
            employee.City = req.body.city || employee.City;
            employee.Region = req.body.region || employee.Region;
            employee.PostalCode = req.body.postalcode || employee.PostalCode;
            employee.Country = req.body.country || employee.Country;
            employee.HomePhone = req.body.homephone || employee.HomePhone;
            employee.Extension = req.body.extension || employee.Extension;
            employee.Photo = req.body.photo || employee.Photo;
            employee.Notes = req.body.notes || employee.Notes;
            employee.ReportsTo = req.body.reportsto || employee.ReportsTo;
            employee.PhotoPath = req.body.photopath || employee.PhotoPath;

            cust.save(function(err, employee) {
                if (err) {
                    res.send('<H1>Got Error while updating</H1>' + err);
                } else {
                    if (employee == null) {
                        res.send('Employee not found !!!');
                    } else {
                        res.send(employee);
                    }
                }
            });
        }
    });
});

Routes.delete('/', function(req, res) {
    Employee.findByIdAndRemove(req.params.id, function(err, employee) {
        if (err) {
            throw err;
        } else {
            if (employee == null) {
                res.send('Employee not found !!!');
            } else {
                if (employee == null) {
                    res.send('Employee not found !!!');
                } else {
                    res.send(employee);
                }
            }
        }
    });
});

module.exports = Routes;
