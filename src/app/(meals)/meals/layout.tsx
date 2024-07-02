import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "MealsLayout metadata",
    description: "MealsLayout description",
};

type Props = { children: React.ReactNode };

const MealsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default MealsLayout;
