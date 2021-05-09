import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { FilesList } from './FilesList';
import { Dropzone } from './Dropzone';
import { useStyles } from './styles';

type IFileInputProps = {
  control: Control<any>;
  name: string;
  text: string;
  setValue: UseFormSetValue<any>;
  loading?: boolean;
}

export const FileInput: React.FC<IFileInputProps> = ({ control, name, text, setValue, loading }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field }) => (
        <div className={styles.main}>
          {field.value && field.value.length
            ? <FilesList name={name} setValue={setValue} loading={loading} field={field} />
            : <Dropzone field={field} loading={loading} text={text} name={name} />
          }
        </div>
      )}
    />
  );
};