import axios from 'axios';


class BookingService {
    bookingsData = null;

    async getAll(force) {
        if(force || !this.bookingsData) {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/bookings/bookings`);

            this.bookingsData = response.data;
        }

        return this.bookingsData;
    }
}

export default BookingService;
