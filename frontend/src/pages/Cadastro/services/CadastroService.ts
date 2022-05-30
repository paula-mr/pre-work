/* eslint-disable camelcase */
/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
import UserRepository from '../../../repositorios/UserRepository';

export interface IResponseCadastro {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

class CadastroService {
  public async fazerLogin(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) {
    const response = await UserRepository.fazerCadastro(
      email,
      password,
      firstName,
      lastName,
    );

    return response;
  }
}

export default new CadastroService();
