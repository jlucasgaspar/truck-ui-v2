import { FC, FormHTMLAttributes } from 'react';

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({ children, onSubmit, className }) => (
  <form noValidate onSubmit={onSubmit} className={className}>
    {children}
  </form>
);