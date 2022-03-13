const mongoose=require('mongoose');
const Joi=require('@hapi/joi');
const  { fertilizerSchema }=require('./fertilizer.modal');


const seedsSchema= new mongoose.Schema({
    seed_id:mongoose.Schema.Types.ObjectId,

    name:{
        type:String,
        required:[true,"please include product price"]
    },

    seeds_amount:{
        type:Number,
        required:true,
        default:0        
    },

    landsize_epected:{
        type:Number,
        required:true,
        default:0
    },
    fertilizer:{
        type:fertilizerSchema,
        required:true
    }

});

function validateSeeds(seeds){
   
    const schema={
        name:Joi.string().required(),
        seeds_amount:Joi.number().required(),
        landsize_expected:Joi.number().required(),
        fertilizer:Joi.required()
    }
    
    
    return Joi.valid(seeds,schema);
}



const Seeds=mongoose.model('seeds',seedsSchema);


module.exports.validate = validateSeeds;

