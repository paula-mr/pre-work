import WorkStationRooms from './view/WorkStationRooms';
import IRota from '../../shared/interfaces/IRota';

const moduloUnidadeTrabalho: IRota[] = [
  {
    path: '/work-unit',
    component: <WorkStationRooms />,
  },
];

export default moduloUnidadeTrabalho;
