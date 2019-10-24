var express = require('express');
var router = express.Router();
var Product=require('../models/Product');

router.get('/', function(req, res, next) {
    //var successMsg=req.flash('success')[0];
    Product.find(function(err, products){
      console.log("I am here")
    /*  var Numberatatime=[];
      var Size=3;
      for(var i=0;i<docs.length;i+=Size){
        Numberatatime.push(docs.slice(i,i + Size));
      }
    */
   res.render('pages/index', { title: 'Shopping Cart', products: products });
    });
  });

  module.exports = router;
