import './PostToView.css'
import { Elipsis } from './elipsis';
import img002 from '../images/img002.jpg'


const PostToView = ({ post }) => {
    const img = post.picture ? post.picture : img002;

    return (
        <>

            <div className="to-post">
                {
                    post.picture ? <img src={post.picture}/> : ""
                }
                {/* <img src={img} alt="blog" /> */}
                <p className='postToView-title'>{Elipsis(post.title, 90)}</p>
                <p className='description'>{Elipsis(post.description, 200)}    ...click to read more!</p>
                <div className="minor-post-details">
                    <p className='post-author'>By: {post.username}</p>
                </div>

            </div>


        </>
    )
}

export default PostToView;