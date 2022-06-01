/* eslint-disable radix */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import {
  makeStyles,
  Box,
  FormControl,
  Typography,
  Divider,
} from '@material-ui/core';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import WorkStationsPanel from '../components/WorkStationsPanel/WorkStationsPanel';
import { COLORS } from '../../../config/material.theme';
import Botao from '../../../shared/components/Botao';
import WorkStationService from '../services/WorkStationRoomsService';
import {
  IWorkStationRoom,
  IWorkStation,
} from '../../../repositorios/WorkStationRepository';
import { SelectComplete } from '../../../shared/components/SelectComplete';
import useUsuarioContext from '../../../context/user/context';

function WorkStationRooms() {
  const { usuario } = useUsuarioContext();
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedUnit, setSelectUnit] = useState<string>('Pampulha');
  const [units, setUnits] = useState<string[]>([]);
  const [rooms, setRooms] = useState<IWorkStationRoom[] | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedWorkStation, setSelectedWorkStation] =
    useState<IWorkStation | null>(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSelectedWorkStation = (workStation: IWorkStation | null) => {
    setSelectedWorkStation(workStation);
  };

  const handleCreateStationBooking = async () => {
    if (selectedWorkStation) {
      WorkStationService.createStationBooking({
        user_id: usuario.id.toString(),
        station_id: selectedWorkStation.id,
        date: selectedDate.format('YYYY-MM-DD'),
      });
      const workStationRooms = await WorkStationService.getWorkStationRooms();
      setRooms(workStationRooms);
      toast.success(
        `Assento ${
          selectedWorkStation.name
        } agendado para o dia ${selectedDate.format('DD-MM-YYYY')}`,
        {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
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
    setSelectedRoom(workStationRooms?.[0]?.name);
  };

  useEffect(() => {
    getWorkStationRooms();
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.details}>
        <Box className={classes.detailsTop}>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectComplete
              label="Unidade"
              options={units}
              value={selectedUnit}
              setValue={newUnit => {
                setSelectUnit(newUnit);
              }}
              disableClearable={true}
            />
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <SelectComplete
              label="Salas"
              options={rooms ? rooms.map(f => f.name) : []}
              value={selectedRoom}
              setValue={newRoom => {
                setSelectedRoom(newRoom);
              }}
              disableClearable={true}
            />
          </FormControl>
        </Box>
        <Box className={classes.detailsBottom}>
          <WorkStationsPanel
            room={rooms ? rooms.filter(m => m.name === selectedRoom)[0] : null}
            date={selectedDate}
            selectedWorkStation={selectedWorkStation}
            handleSelectedWorkStation={handleSelectedWorkStation}
          />
        </Box>
      </Box>
      <Box className={classes.form}>
        <Box className={classes.header}>
          <Typography>{selectedRoom}</Typography>
          <Divider className={classes.muiDivider} />
        </Box>
        <Box className={classes.datetime}>
          <KeyboardDatePicker
            className={classes.datetimeInternal}
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
              navigate('/home');
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
    height: 'calc(100vh - 64px)',
    maxWidth: '1600px',
    margin: 'auto',
    display: 'grid',
    gridTemplateAreas: `'details form'`,
    gridTemplateColumns: '70% 30%',
    alignItems: 'center',
    paddingTop: '64px',
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
    border: 'solid 1px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    display: 'flex',
    placeContent: 'space-around',
    alignItems: 'center',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.BLACK.ORIGINAL,
  },

  formControl: {
    width: '100%',
    marginLeft: '20px',
    marginRight: '20px',
    '&:first-child': {
      marginRight: '0',
    },
    '&:last-child': {
      marginRight: '20px',
    },
  },

  detailsBottom: {
    gridArea: 'detailsBottom',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    display: 'grid',
    borderColor: COLORS.BLACK.DEFAULT,
    borderWidth: '2px',
    borderStyle: 'solid',
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
    border: 'solid 1px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    height: '80vh',
    margin: '20px',
    gridTemplateAreas: `'header' 'datetime' 'actions'`,
    gridTemplateRows: '20% 65% 15%',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.BLACK.ORIGINAL,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
    '& p': {
      margin: 'auto',
      width: 'fit-content',
      padding: '40px 0',
    },
  },

  datetime: {
    width: '100%',
    padding: '50px 30px',
  },

  actions: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '30px',
    marginTop: 'auto',
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

  datetimeInternal: {
    paddingBottom: '20px',
    '&> div': {
      marginTop: '24px',
      border: 'solid 1px black',
      borderRadius: '10px',
      padding: '0 10px',
      '&::before': {
        border: 'none !important',
      },
      '&::after': {
        border: 'none !important',
      },
    },
  },

  muiDivider: {
    background: COLORS.BLACK.DEFAULT,
    height: '2px',
    width: '100%',
  },
});

export default WorkStationRooms;
