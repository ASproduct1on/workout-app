import { $axios } from '../api';

class UserService {
  async getProfile() {
    return $axios.get(`/users/profile`);
  }
}

export default new UserService();
