import {
  makeStyles,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  TextField,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { COLORS } from '../../../config/material.theme';

function SalasReuniao() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [unit, setUnit] = React.useState('');

  return (
    <Box className={classes.container}>
      <Box className={classes.details}>
        <Box className={classes.detailsTop}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel htmlFor="age-simple">Unidade</InputLabel>
            <Select value={unit}>
              <MenuItem aria-label="20" value={20}>
                Twenty
              </MenuItem>
              <MenuItem aria-label="30" value={30}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel htmlFor="age-simple">Unidade</InputLabel>
            <Select value={unit}>
              <MenuItem aria-label="20" value={20}>
                Twenty
              </MenuItem>
              <MenuItem aria-label="30" value={30}>
                Thirty
              </MenuItem>
            </Select>
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
        <p>teste</p>
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
  },
  details: {
    gridArea: 'details',
    height: '80vh',
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
    width: '25vh',
  },

  detailsBottom: {
    gridArea: 'detailsBottom',
    margin: '20px',
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    display: 'grid',
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
  },
});

export default SalasReuniao;
