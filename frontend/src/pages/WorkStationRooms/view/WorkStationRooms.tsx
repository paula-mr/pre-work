import { useState, useEffect } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import {
  makeStyles,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Divider,
} from '@material-ui/core';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

import WorkStationsPanel from '../components/WorkStationsPanel/WorkStationsPanel';
import { COLORS } from '../../../config/material.theme';
import Botao from '../../../shared/components/Botao';
import WorkStationService from '../services/WorkStationRoomsService';
import {
  IWorkStationRoom,
  IWorkStation,
} from '../../../repositorios/WorkStationRepository';

function WorkStationRooms() {
  const classes = useStyles();
  const [unit, setUnit] = useState('Pampulha');
  const [rooms, setRooms] = useState<IWorkStationRoom[] | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<IWorkStationRoom | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedWorkStation, setSelectedWorkStation] =
    useState<IWorkStation | null>(null);

  const handleRoomChange = (event: any) => {
    const roomID = event.target.value;
    const room = rooms?.find(r => r.id === roomID);
    setSelectedRoom(room || null);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSelectedWorkStation = (workStation: IWorkStation | null) => {
    setSelectedWorkStation(workStation);
  };

  const handleCreateStationBooking = async () => {
    if (selectedWorkStation) {
      WorkStationService.createStationBooking({
        user_id: '2',
        station_id: selectedWorkStation.id,
        date: selectedDate.format('YYYY-MM-DD'),
      });
      getWorkStationRooms();
    } else {
      toast.error('Nenhum assento selecionado.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const getWorkStationRooms = async () => {
    const workStationRooms = await WorkStationService.getWorkStationRooms();
    setRooms(workStationRooms);
    setSelectedRoom(workStationRooms?.[0]);
  };

  useEffect(() => {
    getWorkStationRooms();
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.details}>
        <Box className={classes.detailsTop}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel htmlFor="unit">Unidade</InputLabel>
            <Select value={unit}>
              <MenuItem aria-label="20" value="Pampulha">
                Pampulha
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel htmlFor="room">Sala</InputLabel>
            <Select value={selectedRoom?.id || ''} onChange={handleRoomChange}>
              {rooms?.map(room => (
                <MenuItem aria-label="20" value={room.id}>
                  {room.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.detailsBottom}>
          <WorkStationsPanel
            room={selectedRoom}
            date={selectedDate}
            selectedWorkStation={selectedWorkStation}
            handleSelectedWorkStation={handleSelectedWorkStation}
          />
        </Box>
      </Box>
      <Box className={classes.form}>
        <Box className={classes.header}>
          <Typography>{selectedRoom?.name}</Typography>
          <Divider />
        </Box>
        <Box className={classes.datetime}>
          <KeyboardDatePicker
            variant="inline"
            label="Data"
            value={selectedDate.toDate()}
            onChange={handleDateChange}
            autoOk
            disablePast
            format="DD/MM/yyyy"
          />
        </Box>

        <Box className={classes.actions}>
          <Botao
            className={classes.botao}
            variant="outlined"
            onClick={() => {
              console.log('clicked');
            }}
          >
            Cancelar
          </Botao>
          <Botao
            className={classes.botao}
            variant="outlined"
            onClick={handleCreateStationBooking}
          >
            Agendar
          </Botao>
        </Box>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'grid',
    gridTemplateAreas: `'details form'`,
    gridTemplateColumns: '70% 30%',
    alignItems: 'center',
    marginTop: '5vh',
  },
  details: {
    gridArea: 'details',
    height: '85vh',
    display: 'grid',
    gridTemplateAreas: `'detailsTop' 'detailsBottom'`,
    gridTemplateRows: '20% 80%',
  },

  detailsTop: {
    gridArea: 'detailsTop',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    display: 'flex',
    placeContent: 'space-around',
    alignItems: 'center',
  },

  formControl: {
    width: '45vh',
  },

  detailsBottom: {
    gridArea: 'detailsBottom',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    display: 'grid',
    borderColor: COLORS.BLACK.DEFAULT,
  },

  title: {
    fontSize: '40px',
    padding: '20px',
  },

  input: {
    padding: '20px',
  },

  form: {
    gridArea: 'form',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    height: '80vh',
    margin: '20px',
    display: 'grid',
    gridTemplateAreas: `'header' 'datetime' 'actions'`,
    gridTemplateRows: '20% 65% 15%',
  },
  header: {
    display: 'grid',
    gridArea: 'header',
    justifyContent: 'center',
    padding: '5vh 2vh',
  },

  datetime: {
    display: 'grid',
    gridArea: 'datetime',
    justifyContent: 'center',
  },

  actions: {
    gridArea: 'actions',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '1vh',
  },

  botao: {
    width: '120px',
    height: '36px',
    backgroundColor: COLORS.BLUE.DEFAULT,
    color: COLORS.WHITE.DEFAULT,
    borderColor: COLORS.BLACK.ORIGINAL,
    '&:hover': {
      backgroundColor: COLORS.BLUE.HOVER,
    },
  },
});

export default WorkStationRooms;
