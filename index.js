const mongoose = require('mongoose');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:27018/customercli',{useNewUrlParser: true });


//import model

const Customer = require('./models/customer');


//Add customer
const addCustomer = (customer => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        mongoose.connection.close()
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
            mongoose.connection.close()
    })
});

// Update customer
const updateCustomer = (_id, customer) => {
    Customer.update({ _id }, customer)
        .then(customer => {
            console.info('Customer has been updated');
            mongoose.connection.close();
        });
}

//Remove customer
const removeCustomer = (_id) => {
    Customer.remove({ _id })
        .then(customer => {
            console.info(`Customer removed`);
            mongoose.connection.close();
            mongoose.connection.close();
        });
    
}

//List all customer
const listCustomer = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} customers`);
            mongoose.connection.close();
        });
}

//Export methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
};
