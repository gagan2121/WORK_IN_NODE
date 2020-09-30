const { response } = require("express");
const category = require('../models/category');
const { remove } = require("../models/category");

exports.category = (req , res) => {

   //  const errors = validationResult(req);
   // if (!errors.isEmpty()) {
    //  return res.status(400).json({ 
     //     errors: errors.array()[0].msg });
   // }
         const category = new category(req.body)
          category.save((err,category) => {
           if(err || !categor){
            return res.status(400).json({
                err: "not able to save in db"
            })
        }
        
             res.json({ category
             });
       
    })
};

exports.getCategoryById = (req,res,next,id) =>{
    category.findById(id).exec((err,category) => {
        if(err || !category){
            return res.status(400).json({
                error:" No category was  found in DB"
            });
        }
        req.category = Category;
        next();

    })
}

exports.getAllCategory = (req,res) => {
     Category.find().exec((err,Category) => {
          if(err || !Category){
              return res.status(400).json({
                  err: "no Category found"
             })
      }
          res.json(Category);
      })
  }


 exports.updateCategory = (req,res) =>{
    Category.findByIdAndUpdate(
        {_id : req.body._id },
        {$set: req.body },
        {new: true,useFindAndModify: false},
        (err, Category) => {
           
            res.json(Category)
        }
    )
    }



exports.removeCategory = (req,res) =>{
    //const category =req.category;
            category.remove((err, category),

    
    )
}
//protected routes
exports.isSignedIn = expressjwt({

    secret: process.env.SECRET,
    userPoperty : "auth"
}); 
//custom middlewares

exports.isAuthenticated = (req, res, next) => {
    let checker = req.profle && req.auth && req.profile.id === req.auth._id;
    if(!checker){
        return res.status(403).json({
            error: "access denide"
        })
    }
    next();
}

  exports.isAdmin = (req, res, next) => {


    if (req.profile.role === 0){
        return res.status(403).json({
            message: "you r not"
        })

    }


    if (req.profile.role === 1){
 
        return res.status(200).json({
            message: "come in sir"
        })
 
        next();
 
 
 
        
    }
    }