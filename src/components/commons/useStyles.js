import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  inlinePrice: {
    display: 'flex'
  },
  bestPrice: {
    fontSize: 15,
    lineHeight: '20px',
    color: theme.palette.text.secondary,
    fontWeight: 'bolder',
    margin: 0
  },
  unitCurrency: {
    fontSize: 12,
    lineHeight: '20px',
    verticalAlign: 'text-bottom'
  },
  sellerPriceContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(0.5)
  },
  sellerPrice: {
    fontSize: 12,
    lineHeight: '16px',
    color: theme.palette.text.disabled,
    textDecoration: 'line-through'
  },
  badgeSale: {
    fontSize: 10,
    color: theme.palette.common.white,
    width: '26px',
    height: '12px',
    backgroundColor: theme.palette.primary.main,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    padding: 1,
    marginLeft: 10,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: -6,
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderRight: `6px solid ${theme.palette.primary.main}`
    }
  },
  goBack: {
    minWidth:'auto'
  }
}));
