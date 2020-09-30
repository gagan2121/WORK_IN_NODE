var express = require('express');
var router = express('router');
const {check,validationResult} = require('express-validator');
const {signin ,signup,signout,isSignedIn} = require("../controllers/auth");

router.post("/signup",[
    //express validation code
    check("firstname","name atlest 5 char").isLength({ min : 3}),
    check("email","email is requried ").isLength({min:5}),
    check("encry_password","password should be atleast 3 char").isLength({min :3})

],
signup
);

router.post("/signin",[
    check("email","email is required"),
    check("encry_password","password is requird").isLength({min:6})
],
signin
);


router.get("/signout",signout)

    router.get("/testroute",isSignedIn,  ( req, res) => {
        res.send("a protected route");
    });




router.delete('/delete/id', (req, res) => {
    
      router.param("userId",getUserById)
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.get("/users",getAllusers)

    })
  

module.exports = router;

