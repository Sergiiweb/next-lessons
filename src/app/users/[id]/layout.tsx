import React from "react";
import type {Metadata} from "next";

import {IUser} from "@/types";


export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const user: IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(value => value.json());

    return (
        {
            title: user.name,
            description: user.email,
        }
    )
}

type Props = { children: React.ReactNode };

const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default UserLayout;
