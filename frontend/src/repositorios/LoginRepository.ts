/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import axios from '../shared/utils/AxiosInstance';

export type IUser = {
  id: string;
  mail: string;
  first_name: string;
  last_name: string;
};

class LoginRepository {
  async fazerLogin(nome: string, senha: string) {
    const response = await axios.post('/login', {
      username: nome,
      password: senha,
    });
    if (!response) {
      return;
    }
    return response;
  }
}

export default new LoginRepository();
