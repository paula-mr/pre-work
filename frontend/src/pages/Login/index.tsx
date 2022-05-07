import React from 'react';
import Login from './view/Login';
import IRota from '../../shared/interfaces/IRota';

const moduloLogin: IRota[] = [
  {
    path: '/login',
    component: <Login />,
  },
];

export default moduloLogin;
