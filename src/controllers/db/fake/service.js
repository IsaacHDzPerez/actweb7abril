const DBService = require('../dbService');

class FakeService extends DBService {
    constructor() {
        super();
        this.initialized = false;
        this.students = new Map();

        const dummyStudents = [
            { "id": '1', "nombre": "Juan", "matricula": "123456", "calificacion_final": 90, "deuda": 0},
            { "id": '2', "nombre": "Maria", "matricula": "654321", "calificacion_final": 85, "deuda": 100 },
            { "id": '3', "nombre": "Pedro", "matricula": "789012", "calificacion_final": 60, "deuda": 50 },
            { "id": '4', "nombre": "Ana", "matricula": "345678", "calificacion_final": 50, "deuda": 0 }
        ]

        dummyStudents.forEach((student) => {
            this.students.set(student.id, student);
          });

    }

    async getStudents() {
        return Array.from(this.students.values());
      }
}

module.exports = FakeService;