var express = require('express');
var router = express.Router();
var productos= require ("../controllers/productos")
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
 
router.get("/",productos.listado);

module.exports = router;
