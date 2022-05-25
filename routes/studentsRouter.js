import { Router } from "express";
import { createNewStudent, getAllStudents, updateStudent } from "../controllers/studentsController.js";


const studentsRouter = Router();

studentsRouter.route("/").post(createNewStudent).get(getAllStudents);

studentsRouter.route(":id").put(updateStudent)


export default studentsRouter;