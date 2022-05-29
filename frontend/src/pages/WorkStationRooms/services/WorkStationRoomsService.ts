/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import { Dayjs } from 'dayjs';

import WorkStationRepository, {
  IWorkStationRoom,
  IWorkStation,
} from '../../../repositorios/WorkStationRepository';

class WorkStationRoomsService {
  public async getWorkStationRooms(): Promise<IWorkStationRoom[]> {
    const rooms = await WorkStationRepository.listWorkStationRooms();
    return rooms;
  }

  public async getRoomBookedStations(
    room?: IWorkStationRoom | null,
    date?: Dayjs,
  ): Promise<IWorkStation[]> {
    const stationBookings = await WorkStationRepository.listStationBookings(
      room?.id,
      date?.format('YYYY-MM-DD'),
    );
    const roomBookedStations: IWorkStation[] = [];
    stationBookings.forEach(booking =>
      roomBookedStations.push(booking.station),
    );
    return roomBookedStations;
  }
}

export default new WorkStationRoomsService();
