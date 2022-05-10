import React from 'react';
import SalasReuniao from './view/SalasReuniao';
import IRota from '../../shared/interfaces/IRota';

const moduloSalasReuniao: IRota[] = [
  {
    path: '/meetings-room',
    component: <SalasReuniao />,
  },
];

export default moduloSalasReuniao;
