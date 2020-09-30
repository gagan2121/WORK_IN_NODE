require("dotenv").config();
const mongoose = require("mongoose");
const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
//const authRoutes = require("./routes/auth")
const cors = require("cors");

//middlewares
app.use(bodyParser.json());

//MyRoutes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/user");

//myroutes
      
      app.use("/api", authRoutes);
      app.use("/api",userRoutes);
      app.use("/api",productRoutes);



//DataBase Connectivity

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(()=>{
        console.log("DB Conneted");

      });
      
        //Port
        const port = 8000;
  
               app.listen(port, ()=>{
               console.log(`App is running at ${port}`)
});
