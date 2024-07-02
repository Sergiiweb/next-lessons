import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "PostsLayout metadata",
    description: "PostsLayout description",
};

type Props = { children: React.ReactNode };

const PostsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default PostsLayout;
