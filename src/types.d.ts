export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IMeals{
    id: number;
    slug: string;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}
