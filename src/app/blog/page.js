import '../global.css'
import { fetchData } from '../components/constants/auth'
import './blog.css'
import PostsCard from '../components/postscard/postscard'
import NotFoundPage from '../notfound/notfound'

export default async function Product() {
    let dataPosts;

    try {
         dataPosts = await fetchData('https://dummyjson.com/posts')
    } catch (error) {
        return <NotFoundPage />
    }

    if (!dataPosts) {
        return (
            <NotFoundPage />
        )
    }




    return (
        <div className='productListDiv'>
            {dataPosts.posts.length > 0 ? (
                dataPosts.posts.map((post) => <PostsCard key={post.id} post={post} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );

}
