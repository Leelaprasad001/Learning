//used for page vs component

function User({ user }){
    return <>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </>
}
export default User;