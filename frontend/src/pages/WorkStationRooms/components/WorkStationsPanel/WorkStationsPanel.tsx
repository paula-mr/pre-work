/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';
import WorkStationRoomsService from '../../services/WorkStationRoomsService';
import {
  IWorkStationRoom,
  IWorkStation,
} from '../../../../repositorios/WorkStationRepository';
import { COLORS } from '../../../../config/material.theme';

type IWorkStationsPanel = {
  room: IWorkStationRoom | null;
  date: Dayjs;
  selectedWorkStation: IWorkStation | null;
  handleSelectedWorkStation: (workStation: IWorkStation | null) => void;
};

const WorkStationsPanel: FC<IWorkStationsPanel> = ({
  room,
  date,
  selectedWorkStation,
  handleSelectedWorkStation,
}): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [bookedStations, setBookedStations] = useState<IWorkStation[]>([]);
  const [numberOfColumns, setNumberOfColumns] = useState(20);
  const [numberOfRows, setNumberOfRows] = useState(10);

  async function retrieveData() {
    setLoading(true);
    const roomBookedStations =
      await WorkStationRoomsService.getRoomBookedStations(room, date);
    setBookedStations(roomBookedStations);
    setLoading(false);
  }

  function selectWorkStation(workStationNumber: number) {
    for (let i = 0; i < bookedStations.length; i++) {
      const stationNumber = +bookedStations[i].name;
      if (workStationNumber === stationNumber) {
        toast.error('Este assento já está reservado.', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    }

    const newSelectedStation = room?.stations.find(
      station => station.name === String(workStationNumber),
    );

    if (newSelectedStation) {
      if (
        selectedWorkStation &&
        selectedWorkStation.id === newSelectedStation.id
      ) {
        handleSelectedWorkStation(null);
      } else {
        handleSelectedWorkStation(newSelectedStation);
      }
    }
  }

  function defineMatrixElementColor(element: number) {
    switch (element) {
      case -1:
        return COLORS.BLACK.DEFAULT;
        break;
      case 0:
        return COLORS.WHITE.DEFAULT;
        break;
      default:
        for (let i = 0; i < bookedStations.length; i++) {
          const stationName = bookedStations[i].name;
          if (String(element) === stationName) {
            return COLORS.RED.DEFAULT;
          }
        }
        if (String(element) === selectedWorkStation?.name) {
          return COLORS.BLUE.DEFAULT;
        }
        return COLORS.GREEN.DEFAULT;
    }
  }

  useEffect(() => {
    handleSelectedWorkStation(null);
    retrieveData();
  }, [room, date]);

  const isWorkStation = (matrixElement: number) => matrixElement > 0;

  return loading ? (
    <Skeleton variant="rect" width="100%" height="100%" />
  ) : (
    <>
      <Box className={classes.container}>
        {room?.matrix ? (
          <table>
            {room?.matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((element, elementIndex) => (
                  <td
                    key={elementIndex}
                    onClick={() =>
                      isWorkStation(element) ? selectWorkStation(element) : ''
                    }
                    style={{
                      color: COLORS.WHITE.DEFAULT,
                      textAlign: 'center',
                      backgroundColor: defineMatrixElementColor(element),
                      width: `calc(906px/${numberOfColumns})`,
                      height: `calc(325px/${numberOfRows})`,
                      borderColor: COLORS.WHITE.DEFAULT,
                      borderStyle: isWorkStation(element) ? 'solid' : 'none',
                      cursor: isWorkStation(element) ? 'pointer' : 'default',
                    }}
                  >
                    {isWorkStation(element) ? element : ''}
                  </td>
                ))}
              </tr>
            ))}
          </table>
        ) : (
          <></>
        )}
      </Box>
      <Box className={classes.containerRodape}>
        {selectedWorkStation
          ? `Assento Selecionado: ${selectedWorkStation.name}`
          : 'Nenhum assento selecionado'}
      </Box>
    </>
  );
};
const useStyles = makeStyles({
  container: {
    height: '80%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  containerRodape: {
    paddingLeft: '5px',
    height: '20%',
    width: '100%',
  },
});

export default WorkStationsPanel;
