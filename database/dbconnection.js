import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const con = mongoose.connect('mongodb://localhost:27017',{
    dbName : 'company_sample_db'
}).then(db=>{
    console.log('db connect');
}) 
   


export default con;

