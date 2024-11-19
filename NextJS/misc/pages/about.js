import Head from 'next/head'
import Footer from '../components/Footer'

function About(){
    return <>
        <Head>
            <title>About</title>
            <meta name='description' content='About page' />
        </Head>
        <h1 className='content'>About</h1>
    </>
}

export default About

About.getLayout = function PageLayout(page) {
    return(
        <>
            {page}
            <Footer />
        </>
    )
}