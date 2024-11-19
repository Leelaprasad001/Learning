import { getSession } from 'next-auth/react'

const handler = async(req, res) =>{
    const session = await getSession({ req })
    
    if (!session) {
        res.status(401).json({ error: 'You must be sign in to view the protected content on this page.' })
    } else {
        res.status(200).json({ message: 'This is some protected content. You can only access this if you are signed in.' })
    }
}
export default handler;