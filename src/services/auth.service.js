import Cookies from 'js-cookie';

import { $axios } from '../api';
import { TOKEN } from '../app.constants';

class AuthService {
  async main(email, password, type) {
    console.log(email, password, type);
    try {
      const { data } = await $axios.post(`/auth/${type}`, {
        email,
        password,
      });
      console.log({ data });
      if (data.token) Cookies.set(TOKEN, data.token);

      return data;
    } catch (error) {
      console.error(error.response.data);
      // throw new Error(error);
    }
  }
}

export default new AuthService();
