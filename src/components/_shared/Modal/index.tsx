import { ModalProps, Modal as MuiModal } from '@material-ui/core';
import { useStyles } from './styles';

export const Modal: React.FC<ModalProps> = ({ children, className, ...props }) => {
  const styles = useStyles();

  return (
    <MuiModal {...props} className={styles.modal}>
      <div className={`${styles.children} ${className}`}>
        {children}
      </div>
    </MuiModal>
  );
}