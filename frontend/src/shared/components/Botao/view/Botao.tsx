/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
import { COLORS } from '../../../../config/material.theme';

interface IProps {
  habilitado?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  size?: 'large' | 'medium' | 'small';
  carregando?: boolean;
  width?: string;
  height?: string;
  className?: string | undefined;
  children: React.ReactNode;
  onClick: () => void;
  [x: string]: any;
}

interface IPropsStyles {
  width: string;
  height: string;
}

const Botao: React.FC<IProps> = (props: IProps) => {
  const {
    habilitado = true,
    variant,
    color,
    size,
    carregando,
    width = '280px',
    height = '48px',
    className,
    children,
    onClick,
    ...rest
  } = props;
  const classes = useStyles({ width, height });
  const botaoHabilitado = !carregando && habilitado;

  function botao(botaoHabilitado: boolean) {
    return (
      <Button
        onClick={onClick}
        variant={variant}
        color={color}
        size={size}
        disabled={!botaoHabilitado}
        className={`${className} ${classes.button}`}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return !carregando ? (
    botao(botaoHabilitado)
  ) : (
    <div className={classes.wrapper}>
      {botao(botaoHabilitado)}
      <CircularProgress size={24} className={classes.buttonProgress} />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  wrapper: {
    position: 'relative',
  },
  button: {
    width: ({ width }: IPropsStyles) => width,
    height: ({ height }: IPropsStyles) => height,
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
    color: COLORS.WHITE.INICIAL,
  },
}));

export default Botao;
