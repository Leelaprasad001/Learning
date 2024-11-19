import Link from 'next/link'
// import { signIn, signOut, useSession } from 'next-auth/client'

function Navbar() {
//   const [session, loading] = useSession()
  return (
    <nav className='header'>
      <h1 className='logo'>
        NextAuth
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>

          <li>
            <Link href='#'>
                Sign In
            </Link>
          </li>
      
          <li>
            <Link href='#'>
                Sign Out
            </Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar