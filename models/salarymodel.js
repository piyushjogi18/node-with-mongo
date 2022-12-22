import mongoose from "mongoose";

const salary_Schema = mongoose.Schema({
    emp_no : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'employees',
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
const salaryModel = mongoose.model('salaries',salary_Schema);