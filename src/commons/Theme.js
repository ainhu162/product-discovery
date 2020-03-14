import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#df2020',
    },
    secondary: {
        main: '#fff',
    },
    error: {
      main:'#f58400',
      contrastText: '#fff'
    },
    text: {
        primary: 'rgb(38, 40, 41)',
        secondary: 'rgb(234, 52, 31)',
        disabled: 'rgb(143,149,152)'
    }
  },
  typography: {
    fontFamily: 'SFProText'
  },

  shape: {
    borderRadius: 10,
    boxShadow: '0px 2px 5px #ddd',
    background: '#7B1FA2',
    textColor: '#fff',
    border: '#ccc'
  },
  status: {
    danger: 'orange'
  }
});
export default theme;
