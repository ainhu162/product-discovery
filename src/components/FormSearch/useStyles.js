import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shape.boxShadow,
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '90%'
    }
  },
  searchIcon: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: 1,
  },

  inputInput: {
    transition: theme.transitions.create('width'),
    padding: theme.spacing(1, 1, 1, 7),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));
