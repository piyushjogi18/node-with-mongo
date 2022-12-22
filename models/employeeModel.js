import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    birth_date : {
        type : Date,
        required :true
    },
    gender : {
        type : String,
        required : true
    },
    hire_date : {
        type : Date,
        required : true
    },
    age : {
        type : Number,
        required : false,
        default : null
    }    
});

const employeeModel = mongoose.model('employees',employeeSchema);
export default employeeModel;