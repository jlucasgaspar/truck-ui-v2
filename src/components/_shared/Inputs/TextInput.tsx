import { FC } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { DeepMap, FieldValues, FieldError } from 'react-hook-form';

type ITextInputProps = TextFieldProps & {
  name: string;
  loading?: boolean;
  errorMessage?: string;
  errors?: DeepMap<FieldValues, FieldError>;
}

export const TextInput: FC<ITextInputProps> = ({ name, errors, label, errorMessage, loading, ...props }) => (
  <TextField
    fullWidth
    autoFocus
    variant="outlined"
    margin="normal"
    required
    disabled={loading}
    label={label}
    name={name}
    autoComplete={name}
    helperText={!!errors && errors[name]
      ? (errorMessage ? errorMessage : `${label} é obrigatório.`)
      : ''
    }
    error={!!errors && !!errors[name] ? true : false}
    {...props}
  />
);