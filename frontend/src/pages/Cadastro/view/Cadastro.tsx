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
import { COLORS } from '../../../config/material.theme';
import Botao from '../../../shared/components/Botao';

function Cadastro() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleCadastrar() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
  }

  const handleLogin = () => {
    navigate('/login');
  };

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
      <TextField
        aria-label="Confirmar Senha"
        disabled={loading}
        onChange={e => setConfirmarSenha(e.target.value)}
        color="primary"
        variant="outlined"
        label="Confirmar Senha"
        type={confirmarSenhaVisivel ? 'text' : 'password'}
        className={classes.input}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="start"
              onClick={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}
            >
              {confirmarSenhaVisivel ? (
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
        className={classes.botaoCadastrar}
        carregando={loading}
        onClick={() => handleCadastrar}
      >
        Cadastrar
      </Botao>
      <Botao
        variant="outlined"
        className={classes.botaoLogin}
        onClick={handleLogin}
      >
        Já possui uma conta? Faça o login.
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
  botaoCadastrar: {
    width: '150px',
    backgroundColor: COLORS.BLUE.DEFAULT,
    color: COLORS.WHITE.DEFAULT,
    borderColor: COLORS.BLACK.ORIGINAL,
    '&:hover': {
      backgroundColor: COLORS.BLUE.HOVER,
    },
  },
  botaoLogin: {
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

export default Cadastro;
