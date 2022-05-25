import { Router } from "express";
import { createNewStudent, getAllStudents } from "../controllers/studentsController.js";


const studentsRouter = Router();

studentsRouter.route("/").post(createNewStudent).get(getAllStudents);


export default studentsRouter;