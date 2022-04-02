import axios, { AxiosError, AxiosResponse } from 'axios';
import swal from 'sweetalert';
interface GetUpdateUrlProps {
  serial: string;
}

export default async function getUpdateUrl(props: GetUpdateUrlProps) {
  const { serial } = props;
  const BASE_URL = `${import.meta.env.VITE_SERVICE_URL}`;

  try {
    const { data }: AxiosResponse = await axios.get(BASE_URL, {
      params: {
        serial,
      },
    });

    if (!data || Object.keys(data).length < 1)
      swal('Error', 'Try again in few moments', 'error');

    return data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      swal('Error', error.response?.data, 'error');
    } else {
      console.error(error);
      swal('Error', 'Try again in few moments', 'error');
    }

    // console.log('ERROR', error.response.status);
  }
}
