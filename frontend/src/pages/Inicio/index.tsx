import React from 'react';
import Inicio from './view/Inicio';
import IRota from '../../shared/interfaces/IRota';

const moduloInicio: IRota[] = [
  {
    path: '/',
    component: <Inicio />,
  },
];

export default moduloInicio;
