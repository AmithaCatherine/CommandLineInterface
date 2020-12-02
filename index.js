const mongoose = require('mongoose');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:27018/customercli');


//import model

const Customer = require('./models/customer');


//Add customer
const addCustomer = (customer => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        db.close();
    });
});


//find customer
const findCustomer = (name => {
    //make name case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            db.close();
    })
});



//Export methods
module.exports = {
    addCustomer,
    findCustomer,
};
