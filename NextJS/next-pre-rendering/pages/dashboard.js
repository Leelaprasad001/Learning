//used for client side data fetching
import axios from "axios";
import { useState, useEffect } from "react";

function Dashboard(){
    const[isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
            const data = await response.data
            console.log(data)
            setDashboardData(data)
            setIsLoading(false)
            }
            fetchData()
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <h2>Dashboard</h2>
            <h2>UserId - {dashboardData.userId}</h2>
            <h2>Id - {dashboardData.id}</h2>
            <h2>Title - {dashboardData.title}</h2>
            <h2>Body - {dashboardData.body}</h2>
        </div>
    )
}
export default Dashboard;