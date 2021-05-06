import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  // root: {
  //   flexGrow: 1,
  //   zIndex: theme.zIndex.drawer + 1
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: 150,
    marginRight: 'auto'
  }
}));