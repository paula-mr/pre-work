import React from 'react';
import Cadastro from './view/Cadastro';
import IRota from '../../shared/interfaces/IRota';

const moduloCadastro: IRota[] = [
  {
    path: '/cadastro',
    component: <Cadastro />,
  },
];

export default moduloCadastro;
