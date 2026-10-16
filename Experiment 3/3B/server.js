const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/students")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  age: Number
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// 1. CREATE - POST
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    const result = await student.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error creating student",
      error: error.message
    });
  }
});

// 2. READ - GET
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving students",
      error: error.message
    });
  }
});

// 3. UPDATE - PUT
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: "Error updating student",
      error: error.message
    });
  }
});

// 4. DELETE - DELETE
app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.json({
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error: error.message
    });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});