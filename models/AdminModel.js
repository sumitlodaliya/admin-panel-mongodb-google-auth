const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
})

const admindashbord = mongoose.model('admindashbord',AdminSchema);

module.exports = admindashbord;