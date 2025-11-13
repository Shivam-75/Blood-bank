import { Schema, model } from "mongoose";


const bloodRequestSchema = new Schema({
    patientName: {
        type: String,
        require: true,
        trim: true,
        lowercase: true

    },
    gender: {
        type: String,
        require: true,
        lowercase: true,
        enum: ["male", "female", "other"]
    },
    bloodGroup: {
        type: String,
        require: true,
        lowercase: true
    },
    unitsBlood: {
        type: Number,
        require: true,
    },
    hospitalName: {
        type: String,
        require: true,
        lowercase: true
    },
    doctorName: {
        type: String,
        require: true,
        lowercase: true
    },
    age: {
        type: Number,
        require: true,
    },
    contactNumber: {
        type: Number,
        require: true,
    }
}, { timestamps: true });

export const BloodRequest = model("BloodRequest", bloodRequestSchema);

