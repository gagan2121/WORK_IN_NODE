// var expressJwt = require('express-jwt');
//  const product = require("../models/product")  
//  const express = require('express'); 
//  const fs = require('fs'); 
//  const path = require('path') 
//  const formidable = require('formidable'); 
//  const app = express();
//  exports.photo = (req, res, next) => { 
//     const form = new formidable.IncomingForm(); 
//     form.parse(req, function(err, fields, files){ 
//         var oldPath = files.profilePic.path; 
//         var newPath = path.join(__dirname, 'uploads') 
//                 + '/'+files.profilePic.name 
//         var rawData = fs.readFileSync(oldPath) 
//         fs.writeFile(newPath, rawData, function(err){ 
//             if(err) console.log(err) 
//             return res.send("Successfully uploaded") 
//         }) 
//   }) 
// }; 
// getProductById
// exports.getProductById = (req,res,next,id) =>{
//   product.findById(id).exec((err,user) => {
//       if(err || !user){
//           return res.status(400).json({
//               error:" No product was  found in DB"
//           });
//       }
//       req.product = product;
//       next();
//   })
// }
// createproduct
// exports.createProduct = (req , res) => {
//   const product = new Product(req.body)
//   product.save((err , product) => {
//       if(err){
//           return req.status(400).json({
//               err: "not able to craete product"
//           })        
//          }
//          res.json({
//          name: product.name,
//          description: product.description,
//          price: product.price,
//          category: product.category,
//          stock: product.stock,
//          sold: product.sold
//      }); 
//   })
// }
// updateproduct
// exports.updateProduct = (req,res) =>{
//   Category.findByIdAndUpdate(
//       {_id : req.body._id },
//       {$set: req.body },
//       {new: true,useFindAndModify: false},
//       (err, Product) => {
//           res.json(Product)
//       }
//   )
//   }
// deletproduct
// exports.removeProduct = (req,res) =>{
//  ;
//           Product.remove((err, Product),
//   )
// }
// getAllproduct
// exports.getAllProduct = (req,res) => {
//   Product.find().exec((err,Product) => {
//        if(err || !Product){
//            return res.status(400).json({
//                err: "no product found"
//           })
//    }
//        res.json(Product);
//    })
// }