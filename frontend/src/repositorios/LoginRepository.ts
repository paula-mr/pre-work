/* eslint-disable class-methods-use-this */
import axios from '../shared/AxiosInstance';
import { IAxiosResponse } from './interfaces/IAxiosResponse';

class LoginRepository {
  async fazerLogin(
    nome: string,
    senha: string,
  ): Promise<IAxiosResponse<string>> {
    const resposta = await axios.post('user', {
      params: {
        nome,
        senha,
      },
    });

    return resposta;
  }
}

export default new LoginRepository();
