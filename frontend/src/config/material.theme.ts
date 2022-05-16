import { createTheme } from '@material-ui/core/styles';

export const COLORS = {
  BLACK: {
    DEFAULT: '#1C1C1C',
    DARK: '#000000',
    ORIGINAL: '#373F41',
  },
  BLUE: {
    DEFAULT: '#3A73E2',
    HOVER: '#3a72bc',
    HEAVENLY: '#5EC0C7',
    CYAN: '#3A73E2',
  },
  RED: {
    DEFAULT: '#CC0000',
    SALMON: '#EE4646',
  },
  GREEN: {
    DEFAULT: '#008000',
    CARIBBEAN: '#0ACF83',
  },
  WHITE: {
    DEFAULT: '#FFFFFF',
    INICIAL: '#EEEEEE',
    HOVER: '#eeeec8',
  },
};

const PRIMARY_COLOR = COLORS.BLUE.DEFAULT;
const SECONDARY_COLOR = COLORS.WHITE.INICIAL;
const TEXT_PRIMARY_COLOR = COLORS.BLACK.DEFAULT;
const TEXT_SECONDARY_COLOR = COLORS.BLACK.DARK;

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR },
    background: {
      default: COLORS.WHITE.INICIAL,
    },
    text: {
      primary: TEXT_PRIMARY_COLOR,
      secondary: TEXT_SECONDARY_COLOR,
    },
  },
  typography: {
    fontFamily: 'ABeeZee',
    h1: {
      fontWeight: 'normal',
      fontSize: '3rem',
      lineHeight: '3.2rem',
    },
    h2: {
      fontWeight: 'normal',
      fontSize: '2.2rem',
      lineHeight: '2.565rem',
    },
    h3: {
      fontWeight: 'normal',
      fontSize: '1.75rem',
      lineHeight: '2.05rem',
    },
    h4: {
      fontWeight: 'normal',
      fontSize: '1.375rem',
      lineHeight: '1.625rem',
    },
    h5: {
      fontWeight: 'normal',
      fontSize: '1.125rem',
      lineHeight: '1.315rem',
    },
    h6: {
      fontWeight: 'normal',
      fontSize: '0.875rem',
      lineHeight: '1.05rem',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '1.375rem',
      lineHeight: '1.625rem',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '1.125rem',
      lineHeight: '1.315rem',
    },
    subtitle1: {
      fontWeight: 'normal',
      fontSize: '0.875rem',
      lineHeight: '1.05rem',
    },
    caption: {
      fontWeight: 'normal',
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
    },
    button: {
      fontSize: '0.75em',
      lineHeight: '1.315em',
      textTransform: 'none',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
        '&.Mui-error': {
          borderColor: COLORS.RED.DEFAULT,
          color: COLORS.RED.DEFAULT,
        },
        '&.Mui-error.MuiOutlinedInput-adornedEnd button': {
          backgroundColor: COLORS.RED.DEFAULT,
          boxShadow: 'none',
          color: COLORS.RED.DEFAULT,
        },
      },
      notchedOutline: {
        borderColor: COLORS.BLUE.HEAVENLY,
        borderWidth: 2,
      },
    },
    MuiButton: {
      root: {
        height: '42px',
      },
    },
  },
});
