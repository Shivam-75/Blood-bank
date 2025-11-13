import { Schema, model } from "mongoose";

const DonarSchema = new Schema({
    email: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    donarName: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        require: true
    },
    gender: {
        type: String,
        enum: [ "Male", "Female", "Other" ],
        require: true
    },
    bloodGroup: {
        type: String,
        require: true,
        lowercase: true
    },
    number: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    }

}, { timestamps: true });


export const Donar = model("Donar", DonarSchema);