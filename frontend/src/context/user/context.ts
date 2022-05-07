import React, { createContext, useContext } from 'react';

interface IUsuario {
  nome: string;
  email: string;
}

interface IPropsUsuarioContext {
  usuario: IUsuario;
  setUsuario: React.Dispatch<React.SetStateAction<IUsuario>>;
}

export const DEFAULT_VALUE = {
  usuario: {
    nome: 'Igor Dias',
    email: '',
  },
  setUsuario: () => null,
};

export const UsuarioContext =
  createContext<IPropsUsuarioContext>(DEFAULT_VALUE);

const useUsuarioContext = () => useContext(UsuarioContext);

export default useUsuarioContext;
