const { findUserWithPropertyService, createUserService } = require("./user");
const User = require('../model/user');
const bcrypt = require('bcrypt');
const error = require('../error/error');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary');

const registerService = async ({ name, email, password ,avatar}) => {

    const user = await findUserWithPropertyService("email", email)
    if (user) {
        throw error("Already have an account", 400)
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    let avatarCloudinary=  await cloudinary.v2.uploader.upload(avatar);
    avatar={
        publicID:avatarCloudinary.public_id,
        url:avatarCloudinary.secure_url
    }

    const newUser = await createUserService({ name, email, password: hash ,avatar});
    return newUser;

}

const loginService = async ({ email, password }) => {

    const user = await findUserWithPropertyService("email", email)

    if (!user) {
        throw error("Invalid Credentials", 404)
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw error("Invalid Credentials", 404)
    }

    const token = jwt.sign(user._doc, "dev_commerce", { expiresIn: "2h" });
    return token;

}



module.exports = {
    registerService,
    loginService
}