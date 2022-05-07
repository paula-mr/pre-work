import React from 'react';
import { makeStyles, Typography, Button, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../config/material.theme';

function Inicio() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleEntrar = () => {
    navigate('/login');
  };

  const handleCadastrar = () => {
    navigate('/cadastro');
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.titulo} variant="h2">
        Conecte ambientes de trabalho aos seus funcionários
      </Typography>
      <Box className={classes.containerBotoes}>
        <Button
          variant="outlined"
          className={classes.entrar}
          onClick={handleEntrar}
        >
          Entrar
        </Button>
        <Button
          variant="outlined"
          className={classes.cadastrar}
          onClick={handleCadastrar}
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titulo: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'RobotoBold',
    color: COLORS.BLACK.ORIGINAL,
    textAlign: 'center',
    width: '500px',
  },
  containerBotoes: {
    display: 'flex',
    gap: '25px',
    paddingTop: '60px',
  },
  entrar: {
    width: '110px',
    backgroundColor: COLORS.BLUE.DEFAULT,
    color: COLORS.WHITE.DEFAULT,
    borderColor: COLORS.BLACK.ORIGINAL,
    '&:hover': {
      backgroundColor: COLORS.BLUE.HOVER,
    },
  },
  cadastrar: {
    width: '110px',
    color: COLORS.BLUE.DEFAULT,
    borderColor: COLORS.BLUE.DEFAULT,
    '&:hover': {
      backgroundColor: COLORS.WHITE.HOVER,
    },
  },
});

export default Inicio;
