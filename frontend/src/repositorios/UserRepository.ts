/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import axios from '../shared/utils/AxiosInstance';

class UserRepository {
  async fazerCadastro(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    const response = await axios.post('/user', {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    });

    return response;
  }
}

export default new UserRepository();
