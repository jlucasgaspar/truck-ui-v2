import { makeStyles } from '@material-ui/core';
import { signUpBackground } from 'assets/images';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${signUpBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginBottom: theme.spacing(1)
  },
  title: {
    marginBottom: theme.spacing(0)
  }
}));