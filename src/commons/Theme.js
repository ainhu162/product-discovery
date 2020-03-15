import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#df2020',
    },
    secondary: {
        main: '#fff',
        dark: 'rgb(238, 241, 243)',
    },
    error: {
      main:'#f58400',
      contrastText: '#fff'
    },
    text: {
        primary: 'rgb(38, 40, 41)',
        secondary: 'rgb(234, 52, 31)',
        disabled: 'rgb(143,149,152)'
    },
  },
  typography: {
    fontFamily: 'SFProText'
  },

  shape: {
    borderRadius: 10,
    boxShadow: 'rgba(98, 98, 98, 0.5) 0px 1px 2px 0px',
    background: '#7B1FA2',
    textColor: '#fff',
    border: '#ccc'
  },
  status: {
    danger: 'orange'
  }
});
export default theme;
