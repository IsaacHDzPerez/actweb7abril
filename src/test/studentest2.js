const request = require('supertest');
const express = require('express');
const StudentHttpHandler = require("../handlers/costumers.js");

jest.mock('../controllers/student');

describe('StudentHttpHandler', () => {
    let app;
    let mockController;

    beforeEach(() => {
        app = express();
        app.use(express.json());

        mockController = {
            getStudents: jest.fn(),
            getStudentsWithStatus: jest.fn(),
        };

        const studentHandler = new StudentHttpHandler(mockController);
        app.get('/api/students/getAllStudents', studentHandler.getStudents.bind(studentHandler));
        app.get('/api/students/getStudentsWithStatus', studentHandler.getStudentsWithStatus.bind(studentHandler));
    });

    describe('GET /api/students/getAllStudents', () => {
        it('should return a list of students', async () => {
            const mockStudents = [
                { id: 1, nombre: 'Juan', matricula: '123456', calificacion_final: 90, deuda: 0 },
                { id: 2, nombre: 'Maria', matricula: '654321', calificacion_final: 85, deuda: 100 },
            ];

            mockController.getStudents.mockResolvedValue(mockStudents);

            const response = await request(app)
            .get('/api/students/getAllStudents');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockStudents);
            expect(mockController.getStudents).toHaveBeenCalledTimes(1);
        })
    });

    describe('GET /api/students/getStudentsWithStatus', () => {
        it('should return a list of students with status', async () => {
            const mockStudents = [
                { id: 1, nombre: 'Juan', matricula: '123456', calificacion_final: 90, deuda: 0 },
                { id: 2, nombre: 'Maria', matricula: '654321', calificacion_final: 85, deuda: 100 },
            ];

            mockController.getStudentsWithStatus.mockResolvedValue(mockStudents);

            const response = await request(app)
            .get('/api/students/getStudentsWithStatus');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockStudents);
            expect(mockController.getStudentsWithStatus).toHaveBeenCalledTimes(1);
        })
    });
});