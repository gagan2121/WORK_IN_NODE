const express = require('express');
const router = express.Router();

const {isAdmin,isSignedIn,IsAuthenticated} = require("../controllers/auth");

const{ getUserById} = require("../controllers/user");

const {
    getUserById,
    createOrder,
    getOrderStatus,
    getAllOrders
} = require ("../controllers/order")


router.param("userId",getUserById);
router.param("userId",getOrederById);

//create

router.post("/order/create/userId",
isAdmin,
isSignedIn,
IsAuthenticated,
createOrder
)



//read order

router.get("/order/all/:userid",
IsAuthenticated,
isSignedIn,
isAdmin,
getAllOrders
)

//orderupdate

router.put(
    "order/:orderId/status/:userId",
    isAdmin,
    isSignedIn,
    IsAuthenticated,
    updateStatus

)

module.exports=router;
