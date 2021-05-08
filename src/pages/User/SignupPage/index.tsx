import { Typography, Grid, Paper, Link, Divider } from '@material-ui/core';
import { SignupForm } from 'components/User';
import { logoImage } from 'assets/images';
import { useStyles } from './styles';

export const SignupPage: React.FC = () => {
  const styles = useStyles();

  return (
    <Grid container component="main" className={styles.root}>
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <img src={logoImage} width={200} className={styles.logo} alt="Truckify Login" />
          <Divider />
          <Typography component="h3" variant="h4" className={styles.title}>Cadastro</Typography>
          <SignupForm />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Esqueceu a senha?</Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">Já possui conta? Faça login.</Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}