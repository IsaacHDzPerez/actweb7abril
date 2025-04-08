class DBService {
    constructor(db) {
        this.initialized = false;
    }

    async getStudents() {
        if (!this.initialized) {
            throw new Error('Service not initialized');
          }
          throw new Error('Method not implemented');
    }
}

module.exports = DBService;