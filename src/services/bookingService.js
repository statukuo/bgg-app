import axios from './authService';

class BookingService {
    bookingsData = null;

    async getAll(force) {
        if(force || !this.bookingsData) {
            const response = await axios.get('/bookings/bookings');

            this.bookingsData = response.data;
        }

        return this.bookingsData;
    }

    async createBooking(bookingData) {
        const response = await axios.post('/bookings/bookings/', {
            creator: `${process.env.REACT_APP_API_URL}/bookings/users/${bookingData.creator}/`,
            title: bookingData.title,
            description: bookingData.description,
            table: `${process.env.REACT_APP_API_URL}/bookings/tables/${bookingData.table}/`,
            max_participants: bookingData.maxParticipants,
            start_date: bookingData.startDate,
            end_date: bookingData.endDate,
            attendants: bookingData.attendants.map(attendant => `${process.env.REACT_APP_API_URL}/bookings/users/${attendant}/`)
        });

        console.log(response);

        return true;
    }
}

export default BookingService;
