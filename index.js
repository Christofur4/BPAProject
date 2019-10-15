const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var tools = require('/public/myscripts');

express()
  .use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

