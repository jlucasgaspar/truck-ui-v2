import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, CircularProgress } from '@material-ui/core';
import { Delete, InsertDriveFile } from '@material-ui/icons';
import { useStyles } from './styles';
import { useCallback } from 'react';

type IFilesListProps = {
  name: string;
  setValue: UseFormSetValue<any>;
  loading?: boolean;
  field: ControllerRenderProps<any, string>;
}

export const FilesList: React.FC<IFilesListProps> = ({ setValue, name, field, loading }) => {
  const styles = useStyles();

  const removePhoto = useCallback(() => setValue(name, []), [setValue, name]);

  return (
    <List>
      {field.value && field.value.map((file: File, index: number) => (
        <ListItem key={index}>
          <ListItemIcon>
            <InsertDriveFile />
          </ListItemIcon>
          <ListItemText primary={file.name} secondary={file.size} />
          <ListItemIcon>
            {loading
              ? (
                <CircularProgress />
              )
              : (
                <IconButton onClick={removePhoto}>
                  <Delete className={styles.trashIcon} />
                </IconButton>
              )
            }
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}