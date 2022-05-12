import { KeyboardDatePicker, TimePicker } from '@material-ui/pickers';
import { makeStyles, MenuItem, Box, FormControl, InputLabel, Select, Typography, TextField, Divider} from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../config/material.theme';
import Botao from '../../../shared/components/Botao';

function UnidadeTrabalho() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [unit, setUnit] = React.useState('');
  const [room, setRoom] = React.useState('');

  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedInitialTime, handleInitialTimeChange] = useState(new Date());
  const [selectedFinalTime, handleFinalTimeChange] = useState(new Date());

  const onDateChange = (date: any,) => {
    handleDateChange(date);
  };

  const onInitialTimeChange = (time: any,) => {
    handleInitialTimeChange(time);
  };

  const onFinalTimeChange = (time: any,) => {
    handleFinalTimeChange(time);
  };

  return (
    <Box className={classes.container}>
        <Box className={classes.details}>
            <Box className={classes.detailsTop}>
                <FormControl 
                    className={classes.formControl}
                    variant="outlined" 
                >
                    <InputLabel htmlFor="unit">Unidade</InputLabel>  
                    <Select
                        value={unit}
                    >
                        <MenuItem aria-label="20" value={20}>Twenty</MenuItem>
                        <MenuItem aria-label="30" value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl 
                    className={classes.formControl}
                    variant="outlined" 
                >
                    <InputLabel htmlFor="room">Sala</InputLabel>  
                    <Select
                        value={room}
                    >
                        <MenuItem aria-label="20" value={20}>Twenty</MenuItem>
                        <MenuItem aria-label="30" value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

            </Box>
            <Box className={classes.detailsBottom}>
              <p>teste</p>
            </Box>
        </Box>
        <Box className={classes.form}>
            <Box className={classes.header}>
                <Typography>Sala de Reuniões A</Typography>
                <Divider />
            </Box>
            <Box className={classes.datetime}>
              <KeyboardDatePicker
                variant="inline"
                label='Data'
                value={selectedDate}
                onChange={onDateChange}
                onError={console.log}
                disablePast
                format='DD/MM/yyyy'
              />

              <TimePicker
                variant="inline"
                ampm={false}
                label="Horário de início"
                value={selectedInitialTime}
                onChange={onInitialTimeChange}
              />

              <TimePicker
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
                    onClick={()=>{console.log('clicked')}}
                >
                    Cancelar
                </Botao>
                <Botao
                    className={classes.botao}
                    variant="outlined"
                    onClick={()=>{console.log('clicked')}}
                >
                    Agendar
                </Botao>
            </Box>
        </Box>
    </Box>
  );
}
const useStyles = makeStyles({
 container:{
     height: '100vh',
     display: 'grid',
     gridTemplateAreas: `'details form'`,
     gridTemplateColumns: '70% 30%',
     alignItems: 'center',
     marginTop: '5vh'

  },
  details:{
    gridArea: 'details',
    height: '85vh',
    display: 'grid',
    gridTemplateAreas: `'detailsTop' 'detailsBottom'`,
    gridTemplateRows: '20% 80%'
  },

  detailsTop:{
    gridArea: 'detailsTop',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    display: 'flex',
    placeContent:'space-around',
    alignItems: 'center'
  },

  formControl:{
    width: '45vh'
  },


  detailsBottom: {
    gridArea: 'detailsBottom',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    display: 'grid'

  },

  title:{
    fontSize: '40px',
    padding: '20px'
  },

  input:{
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
    gridTemplateRows: '20% 65% 15%'
  },
  header:{
      display: 'grid',
      gridArea: 'header',
      justifyContent: 'center',
      padding: '5vh 2vh'
  },

  datetime:{
    display: 'grid',
    gridArea: 'datetime',
    justifyContent: 'center',
  },

  actions:{
      gridArea: 'actions',
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '1vh'
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
  }
});

export default UnidadeTrabalho;