from dataclasses import dataclass
from typing import List

from src.work_station.domain.work_station import WorkStation
from src.station_booking.domain.station_booking import StationBooking

@dataclass
class WorkStationRoom:
    id: str
    name: str
    stations: List[WorkStation]
    matrix: List[List[str]]

    def get_room_bookings(self, all_bookings: List[StationBooking]) -> List[StationBooking]:
        station_bookings = []
        for booking in all_bookings:
            for room_station in self.stations:
                if booking.station.id == room_station.id:
                    station_bookings.append(booking)
        return station_bookings
