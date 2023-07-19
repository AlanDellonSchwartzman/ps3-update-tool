import axios, { AxiosResponse } from 'axios';

interface FetchUpdatesProps {
  serial: string;
}

export default async function fetchUpdates({ serial }: FetchUpdatesProps) {
  const BASE_URL = `${process.env.NEXT_PUBLIC_SERVICE_URL}`;

  try {
    const { data }: AxiosResponse = await axios.get(BASE_URL, {
      params: {
        serial,
      },
    });

    return data;
  } catch (error) {
    console.error('ERROR:', error);
    return { error: error.message || 'Error, please try again.' };
  }
}
