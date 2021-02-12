const mongoose = require('mongoose')

const ProduitSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    qtBG:{
        type:Number,
        required:true
    },
    qtBM:{
        type:Number,
        required:true
    },
    img:{
        type:Object ,
        src:{
            type:Number,
            required:true
        },
        alt:{
            type:String
        },
        required:true
    },
    categorie:{
        type:String,
        required:true
    },
})

module.exports=ProduitSchema