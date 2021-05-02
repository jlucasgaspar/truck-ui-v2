import { FC, FormHTMLAttributes } from 'react';

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => (
  <form noValidate {...props}>
    {children}
  </form>
);