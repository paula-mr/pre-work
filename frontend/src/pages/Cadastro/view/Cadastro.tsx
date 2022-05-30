/* eslint-disable no-else-return */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
import CadastroService from '../services/CadastroService';


function Cadastro() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  async function handleCadastrar() {
    const dadosCadastro = await CadastroService.fazerLogin(
      email,
      senha,
      nome,
      sobrenome,
    );
    if (dadosCadastro.status === 201) {
      navigate('/login');
      toast.success('Cadastro efetuado com sucesso.', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Erro ao cadastrar.', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
        label="Email"
        color="primary"
        onChange={e => setEmail(e.target.value)}
        className={classes.input}
      />
      <TextField
        name="Nome"
        autoFocus
        variant="outlined"
        label="Nome"
        color="primary"
        onChange={e => setNome(e.target.value)}
        className={classes.input}
      />
      <TextField
        name="Sobrenome"
        autoFocus
        variant="outlined"
        label="Sobrenome"
        color="primary"
        onChange={e => setSobrenome(e.target.value)}
        className={classes.input}
      />
      <TextField
        aria-label="senha"
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
        className={classes.botaoCadastrar}
        onClick={() => handleCadastrar()}
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
