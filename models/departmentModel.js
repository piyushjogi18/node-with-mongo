import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    dept_name : String
});

const departmentModel = mongoose.model('departments',departmentSchema);

export default departmentModel;