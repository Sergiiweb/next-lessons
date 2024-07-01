import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "users metadata",
    description: "users description",
};

type Props = { children: React.ReactNode };

const users = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default users;

