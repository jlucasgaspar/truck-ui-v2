import { CircularProgress, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

type ILoadingProps = {
  text: string;
}

export const Loading: React.FC<ILoadingProps> = ({ text }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CircularProgress size={80} />
      <div style={{ height: 10 }} />
      <Typography variant="h4">{text}</Typography>
    </div>
  );
}