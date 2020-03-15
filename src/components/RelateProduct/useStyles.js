import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    relatedProductsContainer: {
        padding: theme.spacing(1.5)
    },
    title: {
        margin:0,
        color: theme.palette.text.disabled,
        fontSize: '13px',
        lineHeight: '18px'
    },
    relatedProducts: {
        flexWrap: 'nowrap',
        overflowX: 'auto'
    }
}));
