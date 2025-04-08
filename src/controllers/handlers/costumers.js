class StudentHttpHandler {
    constructor(studentController) {
        this.studentController = studentController;
    }

    async getStudents(req, res) {
        try {
            const students = await this.studentController.getStudents();
            res.status(200).json(students);
        } catch (error) {
            console.error('Error fetching students:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getStudentsWithStatus(req, res) {
        try {
            const students = await this.studentController.getStudentsWithStatus();
            res.status(200).json(students);
        } catch (error) {
            console.error('Error fetching students with status:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = StudentHttpHandler;