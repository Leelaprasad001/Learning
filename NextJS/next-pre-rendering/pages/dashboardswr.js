//used for client side data fetching using SWR
import useSWR from 'swr';

const fetcher = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(response)
    return data
}
function DashboardSWR(){
    const { data, error } = useSWR('dashboard', fetcher)

    if(error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>

    return(
        <div>
            <h2>Dashboard</h2>
            <h2>UserId - {data.userId}</h2>
            <h2>Id - {data.id}</h2>
            <h2>Title - {data.title}</h2>
            <h2>Body - {data.body}</h2>
        </div>
    )
}
export default DashboardSWR;