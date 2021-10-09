import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>iit</title>
      </Head>
      
      <h1 className='h1'>Welcome to International Institute of Theravada</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props:{
      //products
    }
  }
}
