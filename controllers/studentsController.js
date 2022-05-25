import Student from "../models/Student.js";

export const createNewStudent = async (req, res) => {try {
    const { name, last_name, email } = req.body;
    const newStudent = await Student.create({ name, last_name, email });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json(error);
  }};

  export const getAllStudents = async (req, res) => {
    try {
      const allStudents = await Student.find();
      res.status(200).json({ students: allStudents });
    } catch (error) {
      res.status(500).json(err);
    }
  };

  export const updateStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, last_name, email } = req.body;
      const modifiedStudent = await Student.findByIdAndUpdate(
        id,
        { name, last_name, email },
        { new: true }
      );
      res.status(200).json(modifiedStudent);
    } catch (error) {
      res.status(500).json(error);
    }
  };