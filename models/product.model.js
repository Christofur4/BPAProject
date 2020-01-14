const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'This field is required.'
    },
    Picture: {
        type: String
    },
    description: {
        type: String
    },
    Price: {
        type: String
    },
    QTY: {
        type: String
    },
    Type: {
        type: String
    },
},
{ collection: 'Product' }
);

/* Custom validation for email
productSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
*/

mongoose.model('Product', productSchema);