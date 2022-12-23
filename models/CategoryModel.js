const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({


    category_name : {
        type : String,
        required : true
    }
})

const admincategory = mongoose.model('admincategory',CategorySchema);

module.exports = admincategory;