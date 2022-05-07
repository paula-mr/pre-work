import React from 'react';
import UsuarioContextProvider from './user/provider';
import IContextProviderProps from './IContextProviderProps';

function AplicationContextProvider({ children }: IContextProviderProps) {
  return <UsuarioContextProvider>{children}</UsuarioContextProvider>;
}

export default AplicationContextProvider;
