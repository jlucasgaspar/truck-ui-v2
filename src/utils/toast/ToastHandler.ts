import { handleToast } from 'utils/toast';

class ToastHandler {
  public success = (message: string): void => handleToast.success('', message);
  public error = (message: string): void => handleToast.error('', message);
  public warning = (message: string): void => toastr.warning('', message);
}

export const handleToast = new ToastHandler();