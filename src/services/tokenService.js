class TokenService {
    getLocalRefreshToken() {
      const authData = JSON.parse(localStorage.getItem("authData"));
      return authData?.refreshToken;
    }
    getLocalAccessToken() {
      const authData = JSON.parse(localStorage.getItem("authData"));
      return authData?.accessToken;
    }
    updateLocalAccessToken(token) {
      let authData = JSON.parse(localStorage.getItem("authData"));
      authData.accessToken = token;
      localStorage.setItem("user", JSON.stringify(authData));
    }
    getAuthData() {
      return JSON.parse(localStorage.getItem("authData"));
    }
    setAuthData(authData) {
      console.log(JSON.stringify(authData));
      localStorage.setItem("authData", JSON.stringify(authData));
    }
    removeAuthData() {
      localStorage.removeItem("authData");
    }
  }
  export default new TokenService();
