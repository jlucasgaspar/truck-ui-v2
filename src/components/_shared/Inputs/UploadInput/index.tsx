import { Button, CircularProgress } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { useStyles } from './styles';

export const UploadInput = ({ text, loading, errors, accept, name, formValues, ...props }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        type="file"
        id="icon-button-file"
        accept={accept || "image/*"}
        className={classes.input}
        name={name}
        {...props}
      />
      <label htmlFor="icon-button-file">
        <Button variant="contained" color="default" component="span" startIcon={<CloudUpload />}>
          {loading ? <CircularProgress size={23} /> : text}
        </Button>
      </label>

      {/* formValues[name] ...... */}
    </div>
  );
}