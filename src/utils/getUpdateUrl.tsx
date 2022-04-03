import axios, { AxiosError, AxiosResponse } from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

interface GetUpdateUrlProps {
  serial: string;
}

export default async function getUpdateUrl(props: GetUpdateUrlProps) {
  const { serial } = props;
  const BASE_URL = `${import.meta.env.VITE_SERVICE_URL}`;

  const genericErrorMessage = () => {
    Swal.fire({
      title: 'Error',
      text: 'Try again in few moments',
      icon: 'error',
    });
  };

  try {
    const { data }: AxiosResponse = await axios.get(BASE_URL, {
      params: {
        serial,
      },
    });

    if (!data || Object.keys(data).length < 1) genericErrorMessage();

    return data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data,
        icon: 'error',
      });
    } else {
      console.error(error);
      genericErrorMessage();
    }
  }
}
