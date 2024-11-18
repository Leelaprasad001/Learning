import Link from 'next/link'
import { useRouter } from 'next/router'
function Home() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2809779144.
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        // router.push('/product')
        router.replace('/product')
    }
    return(
        <div>
            <h1>Home Page</h1>
            <Link href='/blog'>
               Blog
            </Link>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home