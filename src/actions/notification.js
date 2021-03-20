import { toast } from 'react-toastify';

export const notify = () =>
  toast.info('Copied!', {
    autoClose: 800,
    hideProgressBar: false,
  });
