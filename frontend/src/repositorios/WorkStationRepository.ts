/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import axios from '../shared/utils/AxiosInstance';
import { IUser } from './LoginRepository';

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

export type IStationBooking = {
  person: IUser;
  station: IWorkStation;
  date: Date;
};

export type ICreateStationBooking = {
  user_id: string;
  station_id: string;
  date: string;
};

class WorkStationRepository {
  async listWorkStationRooms() {
    const response = await axios.get<IWorkStationRoom[]>('/workStationRooms');
    return response.data;
  }

  async listStationBookings(roomID?: string, date?: string) {
    try {
      const response = await axios.get<IStationBooking[]>('/stationBookings', {
        params: {
          room_id: roomID,
          date,
        },
      });
    return response.data;
    } catch (error) {
      return [];
    }
  }

  async createStationBooking(stationBooking: ICreateStationBooking) {
    await axios.post('/stationBookings', {
      user_id: stationBooking.user_id,
      station_id: stationBooking.station_id,
      date: stationBooking.date,
    });
  }
}

export default new WorkStationRepository();
