import mongoose from "mongoose";

const dept_manager_Schema = mongoose.Schema({
    emp_no : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'employees',
        required : true
    },
    dept_no : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'departments',
        required : true
    },
    from_date : {
         type : Date,
         required : true
    },
    to_date : {
         type : Date,
         required : true 
    }

});

export const dept_managerModel = mongoose.model('dept_manager',dept_manager_Schema);