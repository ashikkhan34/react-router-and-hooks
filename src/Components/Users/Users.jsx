import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData()

    const userContainer = {
        border:'2px solid red',
        padding:'10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    return (
        <div>
            <h1>Users: {users.length} </h1>
            <div >
                {
                    users.map((user) => 
                        <div style={userContainer} key={user.id}>
                            <h4>Name: {user.name}</h4>
                            <p>UserName: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <Link to={`/user/${user.id}`}><button>Click Me</button></Link>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;