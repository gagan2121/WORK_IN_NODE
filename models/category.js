var mongoose = require ('mongoose');

var categorySchema = new Mongoose.Schema (

    {
         name: {
            type: String,
           required: true,
            maxlength: 30,
            trim: true,
            unique: require


        },
            },
    {timestamps: true},
);


 module.exports = Mongoose.model("category",categorySchema);







        

 


