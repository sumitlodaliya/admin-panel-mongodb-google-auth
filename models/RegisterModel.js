const mongoose = require("mongoose");

// const multer = require('multer');

// const path = require('path');

// const AVATAR_PATH = path.join("/uploads/image");

const RegisterSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    // avatar : {
    //     type : String,
    //     required : true
    // }
})

// const userstorage = multer.diskStorage({
//     destination : (req,file,cb)=>{
//         cb(null,path.join(__dirname,'..',AVATAR_PATH));
//     },
//     filename : (req,file,cb)=>{
//         cb(null,file.fieldname+"-"+Date.now());
//     }
// });
// RegisterSchema.statics.uploadedAvatar = multer({storage : userstorage}).single('avatar');
// RegisterSchema.statics.uploadPath = AVATAR_PATH;


const adminregister = mongoose.model('adminregister',RegisterSchema);

module.exports = adminregister;