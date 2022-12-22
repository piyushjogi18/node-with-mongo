import express  from "express";
import employeeRouter from "./routes/api/apiRoutes.js";
import con from "./database/dbconnection.js";

const app = express();
app.use(express.json());

app.use('/api',employeeRouter);

app.listen(3000);