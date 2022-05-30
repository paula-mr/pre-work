/* eslint-disable camelcase */
/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
import LoginRepository from '../../../repositorios/LoginRepository';

export interface IResponseLogin {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

class LoginService {
  public async fazerLogin(
    email: string,
    senha: string,
  ): Promise<IResponseLogin> {
    const response = await LoginRepository.fazerLogin(email, senha);

    return response?.data;
  }
}

export default new LoginService();
