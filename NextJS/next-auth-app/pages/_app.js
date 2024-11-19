import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import '../components/Navbar.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
