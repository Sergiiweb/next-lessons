import {IUser} from "@/types";

const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    users: {
        usersBaseUrl: '/users',
        allUsers: () => base + urlBuilder.users.usersBaseUrl,
        singleUser: (id: number) => base + urlBuilder.users.usersBaseUrl + '/' + id,
    },
    posts: {
        postsBaseUrl: '/posts',
        allUsers: () => base + urlBuilder.posts.postsBaseUrl,
        singleUser: (id: number) => base + urlBuilder.posts.postsBaseUrl + '/' + id,
    },
};

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(urlBuilder.users.allUsers())
            .then(value => value.json());
    }
};

export {
    userService
};
