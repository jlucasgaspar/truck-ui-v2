import { makeStyles, darken } from '@material-ui/core';

const drawerWidth = 240;
const backgroundOrange = '#FA8C16'

export const useStyles = makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      backgroundColor: backgroundOrange,
      color: '#151515',
      boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
      borderRight: '1px solid grey'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) + 1
      }
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
      '& :hover': {
        color: '#000'
      }
    },
    textBlack: {
      color: '#111'
    },
    strongOrange: {
      backgroundColor: darken(backgroundOrange, 0.1)
    },
    marginTop:{
      marginTop: 30
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    }
  })
);