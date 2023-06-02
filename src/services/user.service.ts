import axios from 'axios';

const API_URL = 'https://loginregisterreactapi-production.up.railway.app/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
}

export default new UserService();
