/* eslint-disable no-useless-return */
/* eslint-disable class-methods-use-this */
import LoginRepository from '../../../repositorios/LoginRepository';
class LoginService {
  public async fazerLogin(email: string, senha: string): Promise<void> {
    const respostaUsuarioAd = await LoginRepository.fazerLogin(email, senha);

    console.log(respostaUsuarioAd);
    if (!respostaUsuarioAd) return;

    return;
  }
}

export default new LoginService();
