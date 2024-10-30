import { useNavigate } from "react-router-dom";



const post = ({post}) => {
    const navigate = useNavigate();
    const {id,title} =  post;

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }

    const postContainer = {
        border:'2px solid red',
        padding:'10px',
        borderRadius: '20px',
        marginBottom: '10px'
    }
    
    return (
        <div>
            <div style={postContainer} key={post.id}>
                        <h3>Id : {id}</h3>
                        <p>Title: {title}</p>
                        {/* <Link to={`/post/${post.id}`}><button>Post Details</button></Link> */}
                        <button onClick={handleShowDetails}>Click to see details</button>
                    </div>
        </div>
    );
};

export default post;