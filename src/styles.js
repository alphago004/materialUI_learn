import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    
    icon: {
      marginRight :20,  
    },

    buttons: {
        marginTop: '40px',
    },

    cardGrid: {
        padding: '20px 0'

    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',    
    },

    cardMedia : {
        paddingTop: '56.25%', // 16:9

    },

    cardContents: {
        flexGrow: 1,
    },

    footer: {
        //backgroundColor: theme.palette.background.paper,
        backgroundColor: "#2f50b7",
        padding: theme.spacing(6),
        height: 50,
        marginTop: 10,
        bottom: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        //borderTopStyle: 13,
    },

}));

export default useStyles;