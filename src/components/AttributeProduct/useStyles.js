import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 1.5)
    },
    tabContainer: {
        borderBottom: `1px solid ${theme.palette.secondary.dark}`
    },
    tableParameter: {
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        borderCollapse: 'collapse',
        borderRadius: 8,
        overflow: 'hidden',
    },
    rowEven:{
        backgroundColor: theme.palette.secondary.dark,
    },
    col: {
        padding: theme.spacing(1,1.5),
        fontSize: '14px',
        lineHeight: '19px',
    },
    colLeft: {
        color: theme.palette.text.disabled
    },
    colRight: {
        textAlign: 'right'
    },
    tabTitle: {
        '& > span': {
            fontSize: '13px',
            lineHeight: '18px',
        }
    }
}));
