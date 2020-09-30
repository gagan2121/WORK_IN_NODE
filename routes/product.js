const express = require("express");
const router  = express.Router();

const {
    getProductById,
    createProduct,
    getProduct,
    photo,
    updateProduct,
    deleteProduct,
    getAllProduct
} = require("../controllers/product");

const {
    isSignedIn,
    isAuthenticated,
    isAdmin
} = require("../controllers/auth");

const {getUserById} = require("../controllers/user");

//createroute

router.post( "/product/create/:userId",isSignedIn,
createProduct);

router.post("/photo/upload/:userId", photo) ;