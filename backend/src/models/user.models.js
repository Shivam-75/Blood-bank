import jwt from "jsonwebtoken";
import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    number: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [ /^[0-9]{10}$/, "Mobile number must be exactly 10 digits" ],
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
    },
    landMark: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    distic: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    state: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    refreshToken: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// todo Password hash before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// todo Compare password method
UserSchema.methods.passwordCompare = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// todo Generate Access Token
UserSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.Name,
            emailId: this.emailId,
            number: this.number,
            isAdmin: this.isAdmin
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// todo Generate Refresh Token
UserSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export const User = model("User", UserSchema);
