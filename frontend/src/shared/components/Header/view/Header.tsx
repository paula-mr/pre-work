import React from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Box,
  Link,
} from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut, FiArrowLeft } from 'react-icons/fi';
import { COLORS } from '../../../../config/material.theme';
import useUsuarioContext from '../../../../context/user/context';

function Header() {
  const classes = useStyles();
  const { usuario } = useUsuarioContext();

  const navigate = useNavigate();
  const location = useLocation();
  const rotasPrincipais = location.pathname !== '/';

  const handleRedirecionarPaginaAnterior = () => {
    if (location.key !== 'default') navigate(-1);
    else navigate('/');
  };

  const handleDeslogar = () => {
    return 0;
  };

  const handlePaginaInicial = () => {
    navigate('/');
  };

  return (
    <AppBar
      aria-label="Cabeçalho aplicação"
      className={classes.container}
      position="fixed"
    >
      <Toolbar>
        {!rotasPrincipais ? (
          <IconButton
            className={classes.botao}
            aria-label="Voltar para página anterior"
            disableRipple
            onClick={handleRedirecionarPaginaAnterior}
          >
            <FiArrowLeft size={30} />
          </IconButton>
        ) : (
          <Box width={30} />
        )}
        <div>
          <Link
            onClick={handlePaginaInicial}
            className={classes.cabecalhoLink}
            target="_blank"
          >
            PreWork
          </Link>
        </div>
        {usuario ? (
          <>
            <IconButton
              className={classes.botao}
              aria-label="Voltar para página anterior"
              disableRipple
              onClick={handleDeslogar}
            >
              <FiLogOut size={30} />
            </IconButton>
          </>
        ) : (
          <Box width={30} />
        )}
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  container: {
    background: COLORS.BLUE.DEFAULT,
    width: '100%',
    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  botao: {
    padding: 0,
    color: COLORS.WHITE.DEFAULT,
  },
  cabecalhoLink: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'RobotoBold',
    fontSize: '3.125rem',
    textDecoration: 'none',
    color: COLORS.WHITE.DEFAULT,
    '&:hover': {
      color: COLORS.WHITE.DEFAULT,
      textDecoration: 'none',
      fontFamily: 'RobotoBold',
      fontSize: '3.125rem',
      cursor: 'pointer',
    },
    '&:focus': {
      color: COLORS.WHITE.DEFAULT,
      textDecoration: 'none',
      fontFamily: 'RobotoBold',
      fontSize: '3.125rem',
    },
    '&:active': {
      color: COLORS.WHITE.DEFAULT,
      textDecoration: 'none',
      fontFamily: 'RobotoBold',
      fontSize: '3.125rem',
    },
    '&:visited': {
      color: COLORS.WHITE.DEFAULT,
      textDecoration: 'none',
      fontFamily: 'RobotoBold',
      fontSize: '3.125rem',
    },
  },
});

export default Header;
