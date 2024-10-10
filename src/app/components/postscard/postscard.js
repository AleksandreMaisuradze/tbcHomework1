import Link from 'next/link';
import './postscard.css'
import '../../global.css'
import { routes } from '../constants/routes';

export default function PostsCard(props) {
    const { post } = props;

    return (
        <Link href={`${routes.blog}/${post.id}`} >
            <div className="postcard">
                <h1>Title:{post.title}</h1>
                <h3>Category:{post.body}</h3>
                <div className='bottom_div'>
                    <p>likes: {post.reactions.likes}</p>
                    <p>dislikes {post.reactions.dislikes}</p>
                </div>

            </div>
        </Link>
    );
}