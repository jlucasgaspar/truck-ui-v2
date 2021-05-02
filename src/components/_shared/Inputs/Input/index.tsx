import { FC } from 'react';
import ReactInputMask from 'react-input-mask';
import { TextField, TextFieldProps } from '@material-ui/core';
import { DeepMap, FieldValues, FieldError } from 'react-hook-form';

type IInputProps = TextFieldProps & {
  name: string;
  mask?: string;
  loading?: boolean;
  errors?: DeepMap<FieldValues, FieldError>;
}

export const Input: FC<IInputProps> = ({ name, errors, label, loading, mask, ...props }) => (
  mask 
    ? <ReactInputMask mask={mask} onChange={props.onChange} onBlur={props.onBlur}>
        {() => <BaseInput loading={loading} label={label} name={name} errors={errors} {...props} />}
      </ReactInputMask>
    :
      <BaseInput loading={loading} label={label} name={name} errors={errors} {...props} />
);

const BaseInput: FC<IInputProps> = ({ name, errors, label, loading, mask, ...props }) => (
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
    helperText={(!!errors && !!errors[name] && errors[name].message) && errors[name].message}
    error={!!errors && !!errors[name] ? true : false}
    {...props}
  />
);