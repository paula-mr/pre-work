import React, { useMemo, useState } from 'react';
import IContextProviderProps from '../IContextProviderProps';
import { DEFAULT_VALUE, UsuarioContext } from './context';

function UsuarioContextProvider({ children }: IContextProviderProps) {
  const [usuario, setUsuario] = useState(DEFAULT_VALUE.usuario);

  const value = useMemo(
    () => ({
      usuario,
      setUsuario,
    }),
    [usuario],
  );

  return (
    <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
  );
}

export default UsuarioContextProvider;
