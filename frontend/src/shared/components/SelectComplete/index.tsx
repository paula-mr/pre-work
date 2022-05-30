/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { COLORS } from '../../../config/material.theme';

interface IPropsSelect {
  label?: string;
  options: string[];
  value: string | null;
  className?: string | undefined;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  setValue: (newValue: string) => void;
  disableClearable?: boolean;
  Icon?: string;
  openOnFocus?: boolean;
  'data-testid'?: string;
  size?: 'small' | 'medium';
  loading?: boolean;
  loadingText?: React.ReactNode;
}

interface IPropsStyles {
  Icon?: string;
  disabled?: boolean;
}

export const SelectComplete: React.FC<IPropsSelect> = ({
  label,
  options,
  value,
  className,
  setValue,
  disabled = false,
  disableClearable = false,
  Icon,
  openOnFocus,
  'data-testid': testId,
  size = 'medium',
  loading = false,
  loadingText = <span>Carregando...</span>,
}) => {
  const classes = useStyles({ Icon, disabled });

  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        data-testid={testId}
        openOnFocus={openOnFocus}
        size={size}
        disabled={disabled}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue as string);
        }}
        noOptionsText={'Sem opções'}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        className={className}
        renderInput={(params) => {
          return <TextField {...params} label={label} variant="outlined" />;
        }}
        classes={
          Icon ? { popupIndicator: classes.popupIndicator, popupIndicatorOpen: classes.popupIndicator } : undefined
        }
        disableClearable={disableClearable}
        loading={loading}
        loadingText={loadingText}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  popupIndicator: {
    transform: 'translate(0)',
    width: '28px',
    height: '28px',
    '& span': {
      '& svg': {
        padding: '3px',
        '& path': {
          color: ({ disabled }: IPropsStyles) => (disabled ? 'rgba(0, 0, 0, 0.38)' : COLORS.BLUE.CYAN),
          d: ({ Icon }: IPropsStyles) => `path('${Icon}')`,
        },
      },
    },
  },
  // eslint-disable-next-line prettier/prettier
}));
