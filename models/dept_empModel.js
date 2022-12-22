import mongoose from "mongoose";

const dept_emp_Schema = mongoose.Schema({
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
const dept_empModel = mongoose.model('dept_emp',dept_emp_Schema);