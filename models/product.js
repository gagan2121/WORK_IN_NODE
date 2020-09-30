var mongoose = require ('mongoose');
const { stringify } = require('querystring');

const {ObjectId} =mongoose.Schema;

var productSchema = new mongoose.Schema(
    {
        name:{
         type: string,
         trim: true,
         maxlength: 30,
         required: true   
        },
        details:{
            type: string,
            required: true,
            maxlength: 3000
        },
        category:{
            require:true,
           type: ObjectId,
           ref: "Category"
        },
        
        price:{
            type: Number,
            required: true,
            trim: true,
            maxlength: 32
        },
        stock:{
            type: Array,
            default: [],
            trim: true
        },
        sold:{
            type: Number,
            default: 0
        },
        photo:{
            data: Buffer,
            contenttype: String
        }
       
    },
     {timestamps: true},
    
) 
module.exports = mongoose.model("Product",productSchema);