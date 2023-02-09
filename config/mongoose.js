const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/admin_panel_with_passport-with-OAuth");

const db = mongoose.connection;

db.on('err',console.error.bind(console,'DB not connected'));

db.once('open',(err)=>{
    if(err){
        console.log("DB not start");    
        return false;
    }
    console.log("DB is start");
});


module.exports = db;