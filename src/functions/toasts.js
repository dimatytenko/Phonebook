import { toast } from 'react-toastify';

export function createMyToast(text) {
  return toast.info(text, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
