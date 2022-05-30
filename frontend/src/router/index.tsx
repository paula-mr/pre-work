import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import useUsuarioContext, { IUsuario } from '../context/user/context';
import moduloInicio from '../pages/Inicio';
import moduloLogin from '../pages/Login';
import moduloCadastro from '../pages/Cadastro';
import moduloHome from '../pages/Home';
import NotFound from '../shared/components/NotFound';
import Layout from '../shared/components/Layout';
import moduloSalasReuniao from '../pages/SalasReuniao';
import workStationRoomsModule from '../pages/WorkStationRooms';
import IRota from '../shared/interfaces/IRota';

export const rotasNaoLogadas = [
  ...moduloInicio,
  ...moduloLogin,
  ...moduloCadastro,
];

export const rotasLogadas = [
  ...moduloHome,
  ...moduloSalasReuniao,
  ...workStationRoomsModule,
];

export const rotas = [...rotasLogadas, ...rotasNaoLogadas];





function Router() {
  const { usuario, setUsuario } = useUsuarioContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const dadosLocalStorage = localStorage.getItem('dadosUsuario');

    if (!dadosLocalStorage || usuario.isAuthenticated) {
      localStorage.setItem('dadosUsuario', JSON.stringify(usuario));
      setIsAuthenticated(usuario.isAuthenticated);
    } else {
      const parseLocalStorage: IUsuario = JSON.parse(dadosLocalStorage);
      setIsAuthenticated(parseLocalStorage?.isAuthenticated);
      setUsuario({
        email: parseLocalStorage?.email,
        id: parseLocalStorage?.id,
        firstName: parseLocalStorage?.firstName,
        lastName: parseLocalStorage?.lastName,
        isAuthenticated: parseLocalStorage?.isAuthenticated,
      });
    }
  }, []);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Routes>
          {rotas.map(rota => (
            <Route
              path={rota.path}
              key={rota.path}
              element={<Layout>{rota.component}</Layout>}
            />
          ))}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      ) : (
        <Routes>
          {rotasNaoLogadas.map(rota => (
            <Route
              path={rota.path}
              key={rota.path}
              element={<Layout>{rota.component}</Layout>}
            />
          ))}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default Router;
