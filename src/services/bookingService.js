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
        await axios.post('/bookings/bookings/', {
            creator: bookingData.creator,
            title: bookingData.title,
            description: bookingData.description,
            table: bookingData.table,
            max_participants: bookingData.maxParticipants,
            start_date: bookingData.startDate,
            end_date: bookingData.endDate,
            attendants: bookingData.attendants
        });

        return true;
    }

    async updateBooking(bookingId, bookingData) {
        await axios.patch(`/bookings/bookings/${bookingId}/`, {
            creator: bookingData.creator,
            title: bookingData.title,
            description: bookingData.description,
            table: bookingData.table,
            max_participants: bookingData.maxParticipants,
            start_date: bookingData.startDate,
            end_date: bookingData.endDate,
            attendants: bookingData.attendants
        });

        return true;
    }

    async deleteBooking(bookingId) {
        await axios.delete(`/bookings/bookings/${bookingId}/`);

        return true;
    }
}

export default BookingService;
