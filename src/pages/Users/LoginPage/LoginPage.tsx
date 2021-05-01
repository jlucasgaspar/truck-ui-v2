import { FC } from 'react';
import { Typography, Grid, Paper, Link } from '@material-ui/core';
import { LoginForm } from 'components/Users';
import { logoImage } from 'assets/images';
import { useLoginPageStyles } from './loginPageStyles';

export const LoginPage: FC = () => {
  const styles = useLoginPageStyles();

  return (
    <Grid container component="main" className={styles.root}>
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <img src={logoImage} width={150} className={styles.logo} />
          <Typography component="h3" variant="h4">
            Login
          </Typography>
          <LoginForm />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

