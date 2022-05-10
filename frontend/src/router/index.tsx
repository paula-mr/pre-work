import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import moduloInicio from '../pages/Inicio';
import moduloLogin from '../pages/Login';
import moduloCadastro from '../pages/Cadastro';
import moduloHome from '../pages/Home';
import NotFound from '../shared/components/NotFound';
import Layout from '../shared/components/Layout';
import moduloSalasReuniao from '../pages/SalasReuniao';

export const rotas = [
    ...moduloInicio, 
    ...moduloLogin, 
    ...moduloCadastro,
    ...moduloHome,
    ...moduloSalasReuniao,
  ];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {rotas.map(rota => (
          <Route
            path={rota.path}
            key={rota.path}
            element={<Layout>{rota.component}</Layout>}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
