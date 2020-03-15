import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
    minWidth: 200,
    '&:hover': {
      boxShadow: theme.shape.boxShadow
    },
  },
  header: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '250px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    }
  },
  inLineCardContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'inline-block'
    },
    '& > div': {
      [theme.breakpoints.down('md')]: {
        width: '40%',
        float: 'left'
      }
    }
  },
  headerImg: {
    maxWidth: '90%',
    maxHeight: '100%',

  },
  title: {
    fontSize: 14,
    lineHeight: '19px',
    color: theme.palette.text.primary,
    height: '40px',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
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
    alignItems: 'center'
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
  }
}));
