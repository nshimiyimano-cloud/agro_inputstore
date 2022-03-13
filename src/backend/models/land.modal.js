const mongoose =require('mongoose');
const Joi= require('@hapi/joi');


const landSchema=new mongoose.Schema({
    land_id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String(),
        required:true

    },

    size:{
        type:Number,
        required:true
    },

    province:{
        type:String,
        required:true
    },

    district:{
        type:String,
        required:true
    },

    sector:{
        type:String,
        required:true
    },

    cell:{
        type:String,
        required:true
    },

    village:{
        type:String,
        required:true,       
    },
        
    ouner:{
            _id:mongoose.Types.ObjectId,
            ref:'Farmer'
    }        
    
});


const Land=mongoose.model('land',landSchema);


function validateLand(land){
    const schema={

        names:Joi.string().required(),
        size:Joi.number().required(),
        province:Joi.string().required(),
        district:Joi.string().required(),
        sector:Joi.string().required(),
        cell:Joi.string().required(),
        village:Joi.string().required(),
    
    }
    
}


module.exports.Land=Land;