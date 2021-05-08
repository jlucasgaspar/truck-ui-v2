import { useCallback } from 'react';
import { toastr } from 'react-redux-toastr';

export const useToast = () => {
  const success = useCallback((message: string): void => toastr.success('', message), []);
  const error = useCallback((message: string): void => toastr.error('', message), []);
  const warning = useCallback((message: string): void => toastr.warning('', message), []);

  return {
    toast: {
      success,
      error,
      warning
    }
  }
}