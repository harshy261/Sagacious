import mongoose from 'mongoose'

// DEFINING SCHEMA
const admissionSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    age: {type:Number, required:true},
    father_name: {type:String, required:true},
    phone: {type:Number, required:true},
    mother_name: {type:String, required:true},
    standard: {type:String, enum:["other","1st", "2nd", "3rd", "4rth", "5th", "6th", "7th", "8th", "9th", "10th","11th","12th"], required:true},
    gender: {type:String, required:true},
    address: {type:String, required:true}
})

// COMPILING SCHEMA
const admissionModel = mongoose.model('admission', admissionSchema)


export default admissionModel




