import { Typography, Modal, Backdrop, Fade } from '@material-ui/core';
import { CreateCompanyForm } from 'components/Company';
import { useStyles } from './styles';

export const UserWithoutCompanyPage: React.FC = () => {
  const styles = useStyles();

  return (
    <Modal className={styles.modal} BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} open>
      <Fade in={true}>
        <div className={styles.paper}>
          <Typography variant="h5" className={styles.title}>
            Parece que você ainda não tem empresa cadastrada...
          </Typography>
          <CreateCompanyForm />
        </div>
      </Fade>
    </Modal>
  );
}