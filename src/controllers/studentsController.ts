import { Request, Response } from "express";
import Student, { IStudent } from "../models/Student";

// CREATE a new student
export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const student: IStudent = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json(err);
  }
};

// READ all students
export const getAllStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const students: IStudent[] = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
};

// READ a specific student by ID
export const getStudentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const student: IStudent | null = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE a student by ID
export const updateStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedStudent: IStudent | null = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json(err);
  }
};

// DELETE a student by ID
export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedStudent: IStudent | null = await Student.findByIdAndDelete(
      req.params.id
    );
    if (!deletedStudent) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.status(200).json(deletedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
};
