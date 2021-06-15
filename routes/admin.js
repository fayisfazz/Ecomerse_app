var express = require('express');
const { render}=require('../app')
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
productHelpers.getAllProducts().then((products)=>{
  console.log(products)

  res.render('admin/products-view',{admin: false,products})
 
})
});
router.get('/add-product', function(req, res, next){

res.render('admin/add-product')

});
router.post("/add-product",(req,res)=>{

  productHelpers.addProduct(req.body,(id)=>{
      //let image=req.files.Image
      console.log(id);
// Image.mv('./public/product-images/'+id+'+jpg',(err)=>{
//   if(!err){
//     res.render('admin/add-product')
//   }else{
//     console.log(err);
//   }
//})
 res.render("admin/add-product")
  })   
})



module.exports = router;
