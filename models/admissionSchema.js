import mongoose from 'mongoose'

// DEFINING SCHEMA
const admissionSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    age: {type:Number, required:true},
    father_name: {type:String, required:true},
    phone: {type:Number, required:true},
    mother_name: {type:String, required:true},
    standard: {type:String, required:true},
    gender: {type:String, required:true},
    address: {type:String, required:true}
})

// COMPILING SCHEMA
const admissionModel = mongoose.model('admission', admissionSchema)


export default admissionModel
