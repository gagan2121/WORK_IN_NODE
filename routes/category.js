const express = require("express");
const router = express.router();
const { isAdmin , isAuthenticated, isSignedIn } = require("../controllers/auth");


const{
     
    createCategory,
    updateCategory,
    removeCategory,
    getAllCategory,
    getCategoryById


}= ("../controllers/category");



const {
    isSignedIn,
    isAuthenticated,
    isAdmin
} = require("../controllers/auth");


const {
    getUserById
} = require("../controllers/auth");
const category = require("../models/category");


router.param("userId",getUserById);
router.param("category",getCategoryById);


//create

router.post(
    "category/create/userId",
    isSignedIn,
    isAdmin,
    isAuthenticated,
    createCategory

);

router.post(
    "/category",isAdmin,isAuthenticated,isSignedIn,
    createCategory
 );

 router.get("category?:categoryid",getCategory);

 router.get("category?:categoryid",getAllCategory);

 //update

 router.put(
     "category/:categoryid/:userId",
     isAdmin,
     isSignedIn,
     isAuthenticated,
     updateCategory
 )


//delete
router.delete(
    "category/:categoryId/:userId",
    isAdmin,
    isAuthenticated,
    isSignedIn,
    removeCategory
)


module.exports = router;