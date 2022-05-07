import React from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Box,
} from '@material-ui/core';
import {
  Link as LinkRouterDom,
  useLocation,
  useNavigate,
} from 'react-router-dom';
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
          <LinkRouterDom
            to="/"
            className={classes.cabecalhoLink}
            target="_blank"
          >
            PreWork
          </LinkRouterDom>
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
    '&:hover': {
      color: COLORS.WHITE.DEFAULT,
      textDecoration: 'none',
      fontFamily: 'RobotoBold',
      fontSize: '3.125rem',
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
