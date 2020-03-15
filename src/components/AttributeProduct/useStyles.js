import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 1.5)
    },
    tabContainer: {
        borderBottom: `1px solid ${theme.palette.secondary.dark}`
    },
    shortDescription: {
        height: 140,
        overflow: 'hidden'
    },
    seeMore: {
        color: theme.palette.info.main,
        textTransform: 'initial',
        fontSize: '13px',
        lineHeight: '18px',
        width: '100%',
        maxWidth: 500, 
        margin: '0 auto',
        display: 'flex',
    },
    moreEffect:{
        position: 'absolute',
        top: -40,
        left: 0,
        right: 0,
        width: '100%',
        height: 40,
        background: 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0) 0,#fff)'
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
