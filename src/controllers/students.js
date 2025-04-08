class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }

    async getStudents() {
        try {
            const students = await this.studentService.getStudents();
            return students;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getStudentsWithStatus() {
        try {
            const students = await this.studentService.getStudents();
            console.log(students);
            const studentsWithStatus = students.map(({ matricula, nombre, calificacion_final, deuda }) => {
                let status;
            
                if (calificacion_final >= 70 && deuda === 0) {
                    status = 'Aprobado';
                } else if (calificacion_final < 70 && deuda === 0) {
                    status = 'Pendiente';
                } else if (calificacion_final >= 70 && deuda > 0) {
                    status = 'Reestructura';
                } else {
                    status = 'Expulsado';
                }
            
                return { matricula, nombre, status };
            }); 
            return studentsWithStatus;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = StudentController;