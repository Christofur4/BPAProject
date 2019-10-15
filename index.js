const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  Name:{type:String, required:true},
  Picture:String,
  Price:Number,
  QTY:Number,
  Description:String
},{collection:'Product'});
var Product = mongoose.model('Product',ProductSchema)




express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

