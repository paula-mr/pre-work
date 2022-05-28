/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import axios from '../shared/utils/AxiosInstance';

export type IWorkStation = {
  id: string;
  name: string;
};

export type IWorkStationRoom = {
  id: string;
  name: string;
  stations: IWorkStation[];
  matrix: number[][];
};

class WorkStationRepository {
  async listWorkStationRooms() {
    const response = await axios.get<IWorkStationRoom[]>('/workStationRooms');
    return response.data;
  }
}

export default new WorkStationRepository();
