//const express = require("express")
//const router = express.Router() 

//const {getUserById,getAllUsers,UpdateUser,getUser} = require("../controllers/user");
//const {isSignedIn,isAuthenticated,IsAdmin} = require("../controllers/auth");



//router.param = ("UserId",getUserById);
//router.get("/user/:UserId",isSignedIn,isAuthenticated,getUser);



//router.put("/user/:userId",isSignedIn,isAuthenticated,UpdateUser)

//module.exports = router;

const express = require("express")
const router = express.Router()


const {getUserById, getUser, getAllusers, updateUser} = require("../controllers/user")
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth")

router.param("userId",getUserById)
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
//router.get("/users",getAllusers)

router.put("/user/:userid",isSignedIn,isAuthenticated,updateUser)



module.exports = router;