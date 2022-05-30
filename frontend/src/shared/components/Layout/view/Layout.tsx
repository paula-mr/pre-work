import React, { ReactElement, useEffect, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { matchRoutes, useLocation } from 'react-router-dom';
import IRota from '../../../interfaces/IRota';
import moduloInicio from '../../../../pages/Inicio';
import moduloLogin from '../../../../pages/Login';
import Header from '../../Header';
import { COLORS } from '../../../../config/material.theme';

export const rotas = [...moduloInicio, ...moduloLogin];

interface ILayoutProps {
  children: ReactElement;
}

function Layout({ children }: ILayoutProps) {
  const classes = useStyles();

  return (
    <>
      <main className={classes.container}>
        <Header />
        {children}
      </main>
    </>
  );
}
const useStyles = makeStyles({
  container: {
    height: '100vh',
    background: COLORS.WHITE.INICIAL,
  },
});

export default Layout;
