const mongoose = require("mongoose");

const subcategorySchema = mongoose.Schema({
    sub_category_name : {
        type : String,
        required : true
    },
    category_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "admincategory"
    },
})

const adminsubcategory = mongoose.model('adminsubcategory',subcategorySchema);

module.exports = adminsubcategory;