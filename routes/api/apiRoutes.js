import express from 'express'
import employeeController from '../../controllers/employeeController.js';
import con from '../../database/dbconnection.js';

const employeeRouter = express.Router();

employeeRouter.get('/employees',employeeController.getEmployee);
employeeRouter.post('/add-employee',employeeController.addEmployee);
employeeRouter.patch('/update-employee/:id',employeeController.updateEmployee);
employeeRouter.delete('/employee/:id',employeeController.deleteEmployee);


//extra routes
employeeRouter.get('/dept-with-deptmanager',employeeController.deptWithDeptmanager);

export default employeeRouter;