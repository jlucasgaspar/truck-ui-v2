import { toastr } from 'react-redux-toastr';

class ToastHandler {
  public success = (message: string): void => toastr.success('', message);
  public error = (message: string): void => toastr.error('', message);
  public warning = (message: string): void => toastr.warning('', message);
}

export const handleToast = new ToastHandler();