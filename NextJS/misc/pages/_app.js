import Head from 'next/head'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "../styles/layout.css"

export default function App({ Component, pageProps }) {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  console.log(user)
  console.log(password)

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Leela Prasad</title>
        <meta name='description' content='Leela Prasad' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
