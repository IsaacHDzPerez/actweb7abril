const express = require('express');

const router = express.Router();
const StudentHttpHandler = require('../handlers/costumers');

const StudentServiceFactory = require('../db/factory');
const StudentController = require('../controllers/students');

const studentService = StudentServiceFactory.create('fake', 'connectionString');
const studentController = new StudentController(studentService);
const studentHandler = new StudentHttpHandler(studentController);

// Set up routes
router.get('/students', studentHandler.getStudents.bind(studentHandler)); // Ruta modificada
router.get('/students/status', studentHandler.getStudentsWithStatus.bind(studentHandler)); // Ruta modificada

module.exports = router;