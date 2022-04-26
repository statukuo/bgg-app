import axios from './authService';

class TableService {
    tables = null;

    async getAll(force) {
        if(force || !this.tables) {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/bookings/tables`);

            this.tables = response.data;
        }

        return this.tables;
    }
}

export default TableService;
