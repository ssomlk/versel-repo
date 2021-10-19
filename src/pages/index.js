import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Home() {
  let { t } = useTranslation();
  const router = useRouter();

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
