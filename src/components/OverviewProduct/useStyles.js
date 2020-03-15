import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  overviewContainer: {
    padding: theme.spacing(1.5)
  },
  title: {
    fontSize: '17px',
    lineHeight: '22px',
    fontWeight: 'bolder'
  },
  code: {
    margin: '4px 0',
    color: theme.palette.text.disabled,
    fontSize: '12px',
    lineHeight: '16px'
  },
  codeNumber: {
    color: theme.palette.info.main
  },
  outOfStockLabel: {
    margin: '4px 0',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.disabled,
    fontSize: '12px',
    lineHeight: '16px',
    padding: theme.spacing(0.45, 1),
    textAlign: 'center',
    borderRadius: 5,
    display:'inline-block'
  }
}));
