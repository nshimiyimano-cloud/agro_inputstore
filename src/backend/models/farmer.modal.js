import {Schema,model,Types} from 'mongoose';
import * as Joi from '@hapi/joi';
import string from '@hapi/joi/lib/types/string';
import mongoose from 'mongoose';


const farmerSchema=new Schema({
    farmer_id:mongoose.Schema.Types.ObjectId,
    names:{
        type:String(),
        required:true
    },

    age:{
        type:String,
        required:true
    },

    phone_no:{
        type:String,
        required:true
    },

    email:{
        type:String,
        maxlength:5,
        minlength:255,
        required:true
    },
    land_size:{
        type:Number,
        required:true
    }
});

function validateFarmer(farmer){

    const schema = {
        names:Joi.string().required(),
        age:Joi.string().required(),
        phone_no:Joi.string().required(),
        email:Joi.string().required(),
        land_size:Joi.string().required()

    }

    return Joi.valid(farmer,schema);
}

module.exports.validate= validateFarmer;