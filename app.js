var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var connectionURL = require('./resources/connection.js');
var connection = connectionURL.connection;

var port = process.env.PORT || 3000;

// var connection = require('/resources/connection.js');


var path = require('path');

// defining other App options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

// Building connection
try {
    var sequelize = new Sequelize('northwind', 'root', 'Lahore123!', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });
    // sequelize.authenticate().complete(function(error) {
    //     if (error) {
    //         console.log('Connection Exeption');
    //         throw error;
    //     } else {
    //         console.log('Connection successful');
    //     }
    // });
} catch (error) {
    console.log('Error connecting');
    throw error;
}

// Define all the models
/*
var customerModel = require('./models/customer_model.js');
var employeePrivilegesModel = require('./models/employee_privileges_model.js');
var employeeModel = require('./models/employee_model.js');
var inventoryTransactionTypesModel = require('./models/inventory_transaction_types_model.js');
var inventoryTransactionsModel = require('./models/inventory_transactions_model.js');
var invoicesModel = require('./models/invoices_model.js');
var orderDetailsModel = require('./models/order_detail_model.js');
var orderdetailsstatusModel = require('./models/order_details_status_model.js');
var orderModel = require('./models/orders_model.js');
var orderTaxStatusModel = require('./models/order_tax_status_model.js');


// Define all controllers here
indexRoutes = require('./controllers/home-routes.js');
categoryRoutes = require('./controllers/category_routes.js');
customerRoutes = require('./controllers/customer_routes.js');
employeeRoutes = require('./controllers/employee_routes.js');
orderDetilsRoutes = require('./controllers/order_detail_routes.js');
orderRoutes = require('./controllers/orders_routes.js');
productRoutes = require('./controllers/products_routes.js');
regionRoutes = require('./controllers/region_routes.js');
shipperRoutes = require('./controllers/shipper_routes.js');
supplierRoutes = require('./controllers/supplier_routes.js');
territoryRoutes = require('./controllers/territory_routes.js');
userRoutes = require('./controllers/user_routes.js');

// Defining routes
app.use('/', indexRoutes);
app.use('/category', categoryRoutes);
app.use('/customer', customerRoutes);
app.use('/employee', employeeRoutes);
app.use('/order-details', orderDetilsRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/region', regionRoutes);
app.use('/shippers', shipperRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/territory', territoryRoutes);
app.use('/user', userRoutes);
*/

// Returning 404
// app.use("*", function(req, res) {
//     // res.render(path + "404.html");
//     res.render('404', { title: 'Express' });
// });


// Listening ports
app.listen(port, function(err) {
    if (!err) {
        console.log('listening on port', port);
    } else {
        console.log(err);
    }
});