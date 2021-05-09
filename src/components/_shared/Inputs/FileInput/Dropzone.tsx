import ReactDropzone from 'react-dropzone';
import { ControllerRenderProps } from 'react-hook-form';
import { Paper, CircularProgress } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { useStyles } from './styles';

type IDropzone = {
  loading?: boolean;
  name: string;
  text: string;
  field: ControllerRenderProps<any, string>;
}

export const Dropzone: React.FC<IDropzone> = ({ field, loading, name, text }) => {
  const styles = useStyles();

  return (
    <ReactDropzone onDrop={field.onChange}>
      {({ getRootProps, getInputProps }) => (
        loading
          ? (
            <Paper variant="outlined" className={styles.rootLoading}>
              <CircularProgress className={styles.icon} />
              <input {...getInputProps()} name={name} onBlur={field.onBlur} style={{ display: 'none' }} />
              <p>Carregando...</p>
            </Paper>
          )
          : (
            <Paper variant="outlined" className={styles.root} {...getRootProps()}>
              <CloudUpload className={styles.icon} />
              <input {...getInputProps()} name={name} onBlur={field.onBlur} />
              <p>{text}</p>
            </Paper>
          )
      )}
    </ReactDropzone>
  );
}