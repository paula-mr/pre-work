import React from 'react';
import Home from './view/Home';
import IRota from '../../shared/interfaces/IRota';

const moduloHome: IRota[] = [
  {
    path: '/home',
    component: <Home />,
  },
];

export default moduloHome;
