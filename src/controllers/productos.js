const db = require ("../database/models");
const productos = {
    listado: function(req,res) {
        try{
            db.productos.findAll()
         .then(function(productos){
             
             res.render("index",{productos:productos}) 
         })
        } catch (error){
            console.log(error)
        }
     }
 
 };
 
 
 module.exports= productos;
 