import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    red: {
        backgroundColor: '#ff2040',
        color: '#ffffff',
    },
    navy: {
        backgroundColor: '#003080',
      },
      green: {
        backgroundColor: '#00b020',
      },
      footer: {

      },
    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        color: '#ffffff'
    },
    largeLogo: {
        height: 100,
    },
    logo: {
        height: 50,
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: 10
    },
    title: {
        
        marginTop: 18,
    },
    space: {
        padding: 10,
    },
    media: {
        width: 200,
    },
    largeButton: {
        width: 250,
    },
    largeInput: {
        width: '60px!important',
        padding:'0!important',
        fontSize: '35px!important',
        textAlign: 'center!important',
    },
    bordered: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        borderStyle: 'solid',
    },
    row: {
        display: 'flex',
        padding: 10,
    },
    around: {
        justifyContent: 'space-around',

    },
    between: {
        justifyContent: 'space-between',
    },
}));