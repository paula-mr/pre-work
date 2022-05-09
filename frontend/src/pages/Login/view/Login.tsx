import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import LoginService from '../services/LoginService';
import Botao from '../../../shared/components/Botao';
import { COLORS } from '../../../config/material.theme';

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCadastrar = () => {
    navigate('/cadastro');
  };

  async function handleLogin() {
    navigate('/home');
    setLoading(true);
    await LoginService.fazerLogin(login, senha);
    setLoading(false);
  }

  return (
    <Box className={classes.container}>
      <TextField
        name="Email"
        autoFocus
        variant="outlined"
        disabled={loading}
        label="Email"
        color="primary"
        onChange={e => setLogin(e.target.value)}
        className={classes.input}
      />
      <TextField
        aria-label="senha"
        disabled={loading}
        onChange={e => setSenha(e.target.value)}
        color="primary"
        variant="outlined"
        label="Senha"
        type={senhaVisivel ? 'text' : 'password'}
        className={classes.input}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="start"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
            >
              {senhaVisivel ? (
                <IconButton size="small">
                  <MdVisibility />
                </IconButton>
              ) : (
                <IconButton size="small" data-testid="botao-senha">
                  <MdVisibilityOff />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <Botao
        variant="outlined"
        className={classes.botaoLogin}
        carregando={loading}
        onClick={() => handleLogin()}
      >
        Entrar
      </Botao>
      <Botao
        variant="outlined"
        className={classes.botaoCadastrar}
        onClick={handleCadastrar}
      >
        Primeira vez no PreWork? Crie uma conta.
      </Botao>
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
    gap: '30px',
  },
  botaoLogin: {
    width: '150px',
    backgroundColor: COLORS.BLUE.DEFAULT,
    color: COLORS.WHITE.DEFAULT,
    borderColor: COLORS.BLACK.ORIGINAL,
    '&:hover': {
      backgroundColor: COLORS.BLUE.HOVER,
    },
  },
  botaoCadastrar: {
    width: '300px',
    backgroundColor: COLORS.BLUE.DEFAULT,
    color: COLORS.WHITE.DEFAULT,
    borderColor: COLORS.BLACK.ORIGINAL,
    '&:hover': {
      backgroundColor: COLORS.BLUE.HOVER,
    },
  },
  input: {
    backgroundColor: COLORS.WHITE.DEFAULT,
    borderRadius: '8px',
    width: '300px',
  },
});

export default Login;
