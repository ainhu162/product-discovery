import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    addCartContainer: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(1)
    },
    quantity: {
        fontSize: '15px',
        lineHeight: '20px'
    },
    icon: {
        color: theme.palette.text.disabled
    },
    btnAddToCart: {
        background: 'linear-gradient(45deg, #ea341f 30%, #f5471e 90%)',
        borderRadius: 8,
        border: 0,
        color: 'white',
        height: 48,
        textTransform: 'initial',
        padding: theme.spacing(1.5, 2),
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        boxSizing: 'border-box',
        width: 231,
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
