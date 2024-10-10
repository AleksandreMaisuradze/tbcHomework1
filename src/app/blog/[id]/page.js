import { fetchData } from "../../components/constants/auth";
import NotFoundPage from "../../notfound/notfound";
import '../../global.css'
import './blogdetailspage.css'
import Link from "next/link";
import { routes } from "../../components/constants/routes";

export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    if (!data.posts) {
        return [];
    }
    return data.posts.map((post) => ({
        id: post.id.toString(),
    }));
}

const PostDetailsPage = async ({ params }) => {
    const { id } = params;

    try {
        const postData = await fetchData(`https://dummyjson.com/posts/${id}`);

        if (!postData || !postData.id) {
            return <NotFoundPage />;
        }

        return (
            <>
                <div className="post-details">
                    <h1>{postData.title}</h1>
                    <p className="body">{postData.body}</p>
                    <p className="tags">Tags: {postData.tags.join(', ')}</p>
                    <div className="reactions">
                        <p>Likes: {postData.reactions.likes}</p>
                        <p>Dislikes: {postData.reactions.dislikes}</p>
                        <p>Views: {postData.views}</p>
                    </div>
                </div>
                <Link href={routes.blog}><div className="link">Back</div></Link>
            </>

        );
    } catch (error) {
        return <NotFoundPage />;
    }
};

export default PostDetailsPage;
