import axios, { AxiosError, AxiosResponse } from 'axios';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

interface GetUpdateUrlProps {
  serial: string;
}

const genericErrorMessage = (
  title: string = 'Error',
  text: string = 'Try again in few moments',
  icon: SweetAlertIcon = 'error'
) => {
  Swal.fire(title, text, icon);
};

export default async function getUpdateUrl(props: GetUpdateUrlProps) {
  const { serial } = props;
  const BASE_URL = `${import.meta.env.VITE_SERVICE_URL}`;

  if (!(serial != '') || !serial || serial.length < 9)
    return genericErrorMessage('Ops', 'Please enter a serial valid', 'warning');

  try {
    const { data }: AxiosResponse = await axios.get(BASE_URL, {
      params: {
        serial,
      },
    });

    if (data.length < 1)
      genericErrorMessage('Ops', 'No update available', 'warning');

    return data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data.detail,
        icon: 'error',
      });
    } else {
      console.error(error);
      genericErrorMessage();
    }
  }
}
