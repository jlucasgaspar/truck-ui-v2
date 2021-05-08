class ErrorHandler {
  public generateMessage(error: any | Error): string {
    if (error.code) return this.handleFirebaseError(error);
    if (error.response) return this.handleApiError(error);

    console.log(error);
    return 'Houve algum erro. Por favor tente novamente ou entre em contato.';
  }

  private handleApiError(error: any): string {
    if (error.response) return error.response.data.message;
    else return '';
  }

  private handleFirebaseError(error: any): string {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está em uso.';
      case 'auth/invalid-email':
        return 'E-mail está mal formatado.';
      case 'invalid-email':
        return 'E-mail está mal formatado.';
      case 'auth/wrong-password':
        return 'Credencias inválidas.';
      case 'wrong-password':
        return 'Credencias inválidas.';
      case 'auth/account-exists-with-different-credential':
        return 'Já existe uma conta com o mesmo endereço de e-mail, mas com credenciais de login diferentes.';
      case 'account-exists-with-different-credential':
        return 'Já existe uma conta com o mesmo endereço de e-mail, mas com credenciais de login diferentes.';
      case 'auth/network-request-failed':
        return 'Ocorreu um erro na rede (como timeout, conexão interrompida ou host inalcançável).';
      case 'network-request-failed':
        return 'Ocorreu um erro na rede (como timeout, conexão interrompida ou host inalcançável).';
      case 'auth/user-not-found':
        return 'Usuário não existe.';
      case 'user-not-found':
        return 'Usuário não existe.';
      case 'auth/user-mismatch':
        return 'As credenciais fornecidas não correspondem ao usuário cadastrado.';
      case 'user-mismatch':
        return 'As credenciais fornecidas não correspondem ao usuário cadastrado.';
      case 'auth/weak-password':
        return 'A senha deve ter 6 caracteres ou mais.';
      case 'weak-password':
        return 'A senha deve ter 6 caracteres ou mais.';
      default:
        return '';
    }
  }
}

export const handleError = new ErrorHandler();