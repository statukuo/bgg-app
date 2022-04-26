import axios from './authService';
import tokenService from './tokenService';

class UserService {
    loggedIn = false;
    userData = null;

    async start() {
        try {
            await axios.get(`/api/token/validate`);

            console.log("LOGGED IN");

            this.loggedIn = true;
        } catch (error) {
            return false;
        }
    }

    async login(username, password) {
        try {
            const response = await axios.post('/api/token/', {
                username,
                password
            });

            tokenService.setAuthData({
                accessToken: response.data.access,
                refreshToken: response.data.refresh
            });
            await this.start();

            return this.loggedIn;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        tokenService.removeAuthData();
        this.loggedIn = false;
    }

    async getUserData() {
        if (!this.userData) {
            const response = await axios.get('/bookings/users/current');
            this.userData = response.data;
        }

        if (!this.loggedIn) {
            return {};
        }

        return this.userData;
    }

    async updatePassword(newPassword, repeatedPassword, oldPassword) {
        try {
            const userData = await this.getUserData();

            if (!userData) {
                return false;
            }

            await axios.put(`/api/change_password/${userData.id}/`, {
                password: newPassword,
                password2: repeatedPassword,
                old_password: oldPassword
            });

            this.userData = null;
            this.loggedIn = false;

            return true;
        } catch (error) {
            return false;
        }
    }

    get isLoggedIn() {
        return this.loggedIn;
    }
}

export default UserService;
