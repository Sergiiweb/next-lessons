import {IUser} from "@/types";
import Link from "next/link";

const UsersComponent = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    return (
        <div>
            <ul>
                {
                    users.map((user: IUser) => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.id}: {user.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;
