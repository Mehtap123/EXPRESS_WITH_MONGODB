import "dotenv/config.js"
import "./db/client.js";
import express from "express";
import studentsRouter from "./routes/studentsRouter.js";



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/students", studentsRouter)

app.get("/", (req, res) =>
  res.send("<h1>Wir erstellen eine API mit mongoose</h1>")
);

app.listen(port, () => console.log(`Server running in port ${port}`));
