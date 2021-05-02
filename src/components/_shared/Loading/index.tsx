import { CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from './styles';

type ILoadingProps = {
  text: string;
}

export const Loading: React.FC<ILoadingProps> = ({ text }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CircularProgress size={30} color="secondary" />
      <Typography variant="h3">{text}</Typography>
    </div>
  );
}