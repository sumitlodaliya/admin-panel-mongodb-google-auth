const mongoose = require('mongoose');

// const multer = require('multer');

const path = require('path');

// const AVATAR_PATH = path.join("/uploads/image");

const crudSchema = mongoose.Schema({
    
    grid : {
        type : String,
        required : true
    },
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
    gender : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    course : {
        type : Array,
        required : true
    },
    fees : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
});

const Admincrud = mongoose.model('crud',crudSchema);

module.exports = Admincrud;