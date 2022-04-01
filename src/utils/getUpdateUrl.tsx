import axios from 'axios';
interface GetUpdateUrlProps {
  serial: string;
}

export default async function getUpdateUrl(props: GetUpdateUrlProps) {
  const { serial } = props;
  const BASE_URL = `${import.meta.env.VITE_SERVICE_URL}`;

  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        serial,
      },
    });

    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
}
