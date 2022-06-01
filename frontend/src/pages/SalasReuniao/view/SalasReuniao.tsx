/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { KeyboardDatePicker, TimePicker } from '@material-ui/pickers';
import {
  makeStyles,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  TextField,
  Divider,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../config/material.theme';
import Botao from '../../../shared/components/Botao';
import { SelectComplete } from '../../../shared/components/SelectComplete';

function SalasReuniao() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [unit, setUnit] = React.useState('');
  const [selectedUnit, setSelectUnit] = useState<string>('Pampulha');
  const [units, setUnits] = useState<string[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [rooms, setRooms] = useState<string[]>([]);


  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedInitialTime, handleInitialTimeChange] = useState(new Date());
  const [selectedFinalTime, handleFinalTimeChange] = useState(new Date());

  const onDateChange = (date: any) => {
    handleDateChange(date);
  };

  const onInitialTimeChange = (time: any) => {
    handleInitialTimeChange(time);
  };

  const onFinalTimeChange = (time: any) => {
    handleFinalTimeChange(time);
  };

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
              options={rooms}
              value={selectedRoom}
              setValue={newRoom => {
                setSelectUnit(newRoom);
              }}
              disableClearable={true}
            />
          </FormControl>
        </Box>
        <Box className={classes.detailsBottom}>
          <Typography className={classes.title}>Detalhes</Typography>
          <TextField
            variant="outlined"
            className={classes.input}
            label="Capacidade"
            defaultValue="10 pessoas"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            variant="outlined"
            className={classes.input}
            label="Tamanho"
            defaultValue="20 m²"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            variant="outlined"
            className={classes.input}
            label="Descrição"
            defaultValue="Possui retroprojetor e tomadas"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Box>
      <Box className={classes.form}>
        <Box className={classes.header}>
          <Typography>Sala de Reuniões A</Typography>
          <Divider className={classes.muiDivider} />
        </Box>
        <Box className={classes.datetime}>
          <KeyboardDatePicker
            className={classes.datetimeInternal}
            variant="inline"
            label="Data"
            value={selectedDate}
            onChange={onDateChange}
            onError={console.log}
            disablePast
            format="DD/MM/yyyy"
          />

          <TimePicker
            className={classes.datetimeInternal}
            variant="inline"
            ampm={false}
            label="Horário de início"
            value={selectedInitialTime}
            onChange={onInitialTimeChange}
          />

          <TimePicker
            className={classes.datetimeInternal}
            variant="inline"
            ampm={false}
            label="Horário de fim"
            value={selectedFinalTime}
            onChange={onFinalTimeChange}
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
            onClick={() => {
              console.log('clicked');
            }}
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
    paddingTop: '64px'
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
      marginRight: '20px'
    },
  },
  detailsBottom: {
    gridArea: 'detailsBottom',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    border: 'solid 1px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    display: 'grid',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.BLACK.ORIGINAL,
    '& [readonly]': {
      cursor: 'initial',
      position: 'relative',
      zIndex: 1,
      '& + fieldset': {
        backgroundColor: COLORS.BLUE.TRANSPARENT_B,
        '& legend': {
          display: 'none'
        }
      }
    }
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
    alignItems: 'center'
  },
  header: {
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
    '& p': {
      margin: 'auto',
      width: 'fit-content',
      padding: '40px 0'
    }
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
    marginTop: 'auto'
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
        border: 'none !important'
      },
      '&::after': {
        border: 'none !important',
      }
    },
  },

  muiDivider: {
    background: COLORS.BLACK.DEFAULT,
    height: '2px',
    width: '100%',
  }
});

export default SalasReuniao;
