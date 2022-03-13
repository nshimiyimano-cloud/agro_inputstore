const mongoose= require('mongoose');
const Joi=require('@hapi/joi');


const fertilizerSchema=new mongoose.Schema({
    firtilizer_id:mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    formula:{
        type:String,
        required:true,    
    },

    seedtype_expected:{
        type:String,
        required:true
    }
})



Fertilizer=mongoose.model('fertilizer',fertilizerSchema);


 function validateFertilizer(fertilizer){
     const schema={
         name:Joi.string().required(),
         formula:join.string().required(),
         seedtype_expected:Joi.string().required()
     };

     return Joi.valid(fertilizer,schema);
      
 }


 module.exports.validate=validateFertilizer;
 module.exports.fertilizerSchema=fertilizerSchema;

