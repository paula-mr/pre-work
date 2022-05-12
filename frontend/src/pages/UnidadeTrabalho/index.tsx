import React from 'react';
import UnidadeTrabalho from './view/UnidadeTrabalho';
import IRota from '../../shared/interfaces/IRota';

const moduloUnidadeTrabalho: IRota[] = [
  {
    path: '/work-unit',
    component: <UnidadeTrabalho />,
  },
];

export default moduloUnidadeTrabalho;
