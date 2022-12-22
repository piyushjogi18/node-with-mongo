import express from 'express'
import employeeModel from '../models/employeeModel.js';
import departmentModel from '../models/departmentModel.js';
import { dept_managerModel } from '../models/dept_managerModel.js';

class employeeController {

    //get employees
    static getEmployee = async (req,res) => {
        const employees = await employeeModel.find();
        res.status(200).json({"employees":employees});
    }

    //add employee
    static addEmployee = async (req,res) => {
       try{
            const employee = await employeeModel.create(req.body);  
            res.status(200).send({
                "employee" : employee
            });   
       }catch(err){
           console.log(err);
       }
    }

    //update employee
    static updateEmployee = async (req,res)=> {
        try{
            const updatedEmployee = await employeeModel.findOneAndUpdate({_id:req.params.id},{$set : req.body});
            res.status(200).send({"updated employee":updatedEmployee});
        }catch(err){
            console.log(err);
        }
    }

    //delete employee
    static deleteEmployee = async (req,res)=> {
        try{
            const deletedEmployee = await employeeModel.findOneAndDelete({_id:req.params.id});
            res.status(200).send({"deleted employee":deletedEmployee});
        }catch(err){
            console.log(err);
        }
    }

    //dept with dept manager
    static deptWithDeptmanager = async (req,res) => {
       try{
            const results = await departmentModel.aggregate([
                {
                    $lookup : {
                        "from" : "dept_manager",
                        "localField" : "_id",
                        "foreignField" : "dept_no",
                        "as" : "department manger"
                    }, 
                },
                {
                    $sort : {
                        "dept_name" : -1
                    }
                }
            ]);
            res.status(200).send({"results":results});
        }catch(err){
            console.log(err);
        } 
    }
}
export default employeeController;