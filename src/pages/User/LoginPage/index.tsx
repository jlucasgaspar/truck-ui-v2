import { Typography, Grid, Paper, Link, Divider } from "@material-ui/core";
import { LoginForm } from "components/User";
import { logoImage } from "assets/images";
import { useStyles } from "./styles";

export const LoginPage: React.FC = () => {
  const styles = useStyles();

  return (
    <Grid container component="main" className={styles.root}>
      <Grid item xs={false} sm={4} md={7} className={styles.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styles.paper}>
          <img src={logoImage} width={150} className={styles.logo} alt="Truckify Login" />
          <Divider />
          <Typography component="h3" variant="h4">Login</Typography>
          <LoginForm />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Equeceu a senha?</Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">Não possui conta? Cadastre-se já.</Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}