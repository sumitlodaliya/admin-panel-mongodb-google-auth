const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    // name : {
    //     type : String,
    //     required : true
    // },
    // email : {
    //     type : String,
    //     required : true
    // },
    // password : {
    //     type : String,
    //     required : true
    // }
})

const adminlogin = mongoose.model('adminlogin',LoginSchema);

module.exports = adminlogin;