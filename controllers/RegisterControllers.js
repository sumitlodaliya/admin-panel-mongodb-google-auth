const adminregister = require('../models/RegisterModel');

module.exports.register = (res,req) => {
        return req.render('register');
}

module.exports.insertData = async (req, res) => {
        try {
            const adminData = await adminregister.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            if (!adminData) {
                console.log("Plese Insert You Data");
                return res.redirect('back')
            }
            else {
                console.log("Data Insert Successfuly");
                return res.redirect('/login');
            }
        }
        catch (err) {
            if (err) {
                console.log(err);
                return false;
            }
        }
    
    }