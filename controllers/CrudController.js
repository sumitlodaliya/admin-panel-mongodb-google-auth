const Admincrud = require('../models/CRUDModel');

// const fs = require('fs');

const path = require('path');

module.exports.addData = (req, res) => {

    // console.log(req.body);
    Admincrud.create({
        grid: req.body.grid,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        contact: req.body.contact,
        course: req.body.course,
        fees: req.body.fees,
        state: req.body.state,
    }, (err, data) => {
        console.log(data);
        if (err) {
            console.log("record not insert");
            return false;
        }
        console.log("Record successfully insert");
        return res.redirect('back');
    })
}

// View Data

module.exports.viewData = (req, res) => {
    Admincrud.find({}, (err, record) => {
        if (err) {
            console.log("Data Not view");
            return false;
        }

        return res.render('view', {
            record: record
        });
    });
}

// Delete data

module.exports.deleteData = (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    Admincrud.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log("Record Not Delete");
            return false;
        }
        console.log("Record Deleted");
        return res.redirect('back');
    });
}

module.exports.editData = async (req, res) => {
    let id = req.params.id;
    // try {
    //     let editRocord = await Admincrud.findById((id));
    //     if (editRocord) {
    //         return res.render('edit', {
    //             single: editRocord
    //         })
    //     }
    //     else {
    //         console.log("record not match");
    //         return false;
    //     }
    // }
    // catch (err) {
    //     console.log(err);
    // }

    Admincrud.findById(id, (err, editRocord) => {
        if (err) {
            console.log("data not edit");
            return false;
        }
        return res.render('edit', {
            single: editRocord
        })
    });
}



module.exports.updateData = (req, res) => {
    let id = req.body.id;
    console.log(id);
    // console.log(req.body);

    Admincrud.findByIdAndUpdate(id, {
        grid: req.body.grid,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        contact: req.body.contact,
        course: req.body.course,
        fees: req.body.fees,
        state: req.body.state,
    }, (err, editdata) => {
        if (err) {
            console.log("Record not update");
            return false;
        }
        console.log(editdata);
        console.log("Record successfully update");
        return res.redirect('/admin/viewData');
    })
};