import React, { createContext, useContext } from 'react';

export interface IUsuario {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  isAuthenticated: boolean;
}

interface IPropsUsuarioContext {
  usuario: IUsuario;
  setUsuario: React.Dispatch<React.SetStateAction<IUsuario>>;
}

export const DEFAULT_VALUE = {
  usuario: {
    email: '',
    firstName: '',
    id: 0,
    lastName: '',
    isAuthenticated: false,
  } as IUsuario,
  setUsuario: () => null,
};

export const UsuarioContext =
  createContext<IPropsUsuarioContext>(DEFAULT_VALUE);

const useUsuarioContext = () => useContext(UsuarioContext);

export default useUsuarioContext;
