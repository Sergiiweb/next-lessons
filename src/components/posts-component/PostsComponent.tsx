import {IPost} from "@/types";
import Link from "next/link";

const PostsComponent = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    return (
        <div>
            <ul>
                {
                    posts.map((post: IPost) => (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                {post.id}: {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostsComponent;
