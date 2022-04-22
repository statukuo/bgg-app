import axios from 'axios';


class UserService {
    loggedIn = false;
    userData = null;

    async login(username, password) {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api-token-auth/`, {
            username,
            password
        });

        axios.interceptors.request.use(request => {
            const isLoggedIn = response.data.token;
            const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL);

            if (isLoggedIn && isApiUrl) {
                request.headers.common.Authorization = `Token ${response.data.token}`;
            }

            return request;
        });

        this.loggedIn = !!response.data.token;

        return this.loggedIn;
    }

    async getUserData() {
        if (!this.userData) {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/bookings/users/current`);
            this.userData = response.data;
        }

        if (!this.loggedIn) {
            return {};
        }

        return this.userData;
    }

    get isLoggedIn() {
        return this.loggedIn;
    }
}

export default UserService;
