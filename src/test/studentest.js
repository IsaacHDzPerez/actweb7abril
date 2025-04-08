const StudentController = require('../controllers/student');

describe('StudentController', () => {
  let mockService;
  let controller;

  beforeEach(() => {
    mockService = {
      getStudents: jest.fn(),
      getStudentsWithStatus: jest.fn(),
    };
    controller = new StudentController(mockService);
  });

  test('should get all students', async () => {
    const students = [{ id: 1, nombre: 'Juan', matricula: '123456', calificacion_final: 90, deuda: 0 }];
    mockService.getStudents.mockResolvedValue(students);

    const result = await controller.getStudents();
    expect(result).toEqual(students);
    expect(mockService.getStudents).toHaveBeenCalledTimes(1);
  });

  test('should get all students with status', async () => {
    const students = [
        { "id": '1', "nombre": "Juan", "matricula": "123456", "calificacion_final": 90, "deuda": 0},
        { "id": '2', "nombre": "Maria", "matricula": "654321", "calificacion_final": 85, "deuda": 100 },
        { "id": '3', "nombre": "Pedro", "matricula": "789012", "calificacion_final": 60, "deuda": 50 },
        { "id": '4', "nombre": "Ana", "matricula": "345678", "calificacion_final": 50, "deuda": 0 }
    ]
    mockService.getStudents.mockResolvedValue(students);

    const expectedResult = [
        { matricula: '123456', nombre: 'Juan', status: 'Aprobado' },
        { matricula: '654321', nombre: 'Maria', status: 'Reestructura' },
        { matricula: '789012', nombre: 'Pedro', status: 'Expulsado' },
        { matricula: '345678', nombre: 'Ana', status: 'Pendiente' }
    ];
    const result = await controller.getStudentsWithStatus();
    expect(result).toEqual(expectedResult);
    expect(mockService.getStudents).toHaveBeenCalledTimes(1);
  });
});