import {FC} from "react";
import {IPost} from "@/types";

interface IProps {
    params: {
        id: string;
    }
}

const PostPage: FC<IProps> = async ({params: {id}}) => {
    const post: IPost = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(value => value.json());

    return (
        <div>
            {post.id}: {post.title}
            <br/>
            {post.body}
        </div>
    );
};

export default PostPage;
