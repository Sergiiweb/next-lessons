import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "UsersLayout metadata",
    description: "UsersLayout description",
};

type Props = { children: React.ReactNode };

const UsersLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default UsersLayout;

