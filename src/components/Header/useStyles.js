import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.text.primary,
    },
    titleContainer: {
        width: '70%',
        margin: '0 auto'
    },
    title: {
        fontSize: '13px',
        lineHeight: '18px',
        color: theme.palette.text.primary,
    },
    price: {
        fontSize: '13px',
        lineHeight: '19px',
        color: theme.palette.text.secondary,
    }
}));
