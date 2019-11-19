const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/mydb');

mongoose.connect('mongodb://dbadmin:dbpassword1@ds339968.mlab.com:39968/heroku_gv1ggzq2');

var indexRouter = require('./routes/Product');


express()
  .use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  //.get('/', (req, res) => res.render('pages/index'))
  .use('/', indexRouter)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  