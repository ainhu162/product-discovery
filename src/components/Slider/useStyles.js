import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        textAlign: 'center'
      },
      img: {
        maxHeight: '100%',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        margin:'0 auto'
      },
}));
