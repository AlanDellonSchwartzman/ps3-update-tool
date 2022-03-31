// import axios from 'axios';
import { parseString } from 'xml2js';

interface GetUpdateUrlProps {
  serial: string;
}

export default async function getUpdateUrl(props: GetUpdateUrlProps) {
  const { serial } = props;
  const BASE_URL = `https://a0.ww.np.dl.playstation.net/tpl/np/${serial}/${serial}-ver.xml`;

  try {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    // const response = await axios.get(BASE_URL, {
    //   headers: { 'Content-Type': 'text/xml', 'Sec-Fetch-Mode': 'navigate' },
    // });

    // const custom_request = new Request(BASE_URL, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/xml',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // });

    await fetch(BASE_URL, {
      headers: [
        ['Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'],
        ['Content-Type', 'application/xml'],
        [ 'Ses-Fetch-Mode', 'navigate' ],
        [ 'Sec-Fetch-Dest',  'document' ],
        [ 'Sec-Fetch-User',  '?1' ],
        [ 'Upgrade-Insecure-Requests',  '1' ],

      ],
      credentials: 'include',
    })
      .then((res) => console.log('res', res))
      .catch((error) => console.log('ERROR', error));
      
  } catch (error) {
    console.log('ERROR', error);
  }
}
