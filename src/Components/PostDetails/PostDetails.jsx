import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const {postId} = useParams()

    console.log(postId)

    const handleBack = () =>{
        navigate(-1)
    }

    const postContainer = {
        border:'2px solid red',
        padding:'10px',
        borderRadius: '20px',
        marginBottom: '10px',
        marginTop: '10px'
    }

    const {id,title,body} = post;
    return (
        <div style={postContainer}>
            <h1>post details</h1>
            <h3>Id : {id}</h3>
            <p>Title : {title}</p>
            <p>{body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;