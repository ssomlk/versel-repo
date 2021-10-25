import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from 'next/link'

import { Button } from 'react-bootstrap';
import AudioComponent from "../components/AudioComponent";
import AudioComponent2 from "../components/AudioComponent2";
import MessengerComponent from "../components/chat/Messenger";

export default function Home() {
  const { t, lang } = useTranslation();
  const router = useRouter();
  console.log(lang);

  return (
    <div>
      <Head>
        <title>iit</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="international institute of theravada" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <h1 className='h1'>{t('common:greeting')}</h1>

      <div>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
      </div>

      <h5>Using React-Player</h5>
      <AudioComponent/>

      <h5>Using React-audio-Player</h5>
      <AudioComponent2/>

      <MessengerComponent/>

      <footer>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale} ><a> {locale}</a></Link>
            </li>
          ))}

        </ul>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    }
  }
}
