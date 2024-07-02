import Link from "next/link";

import {userService} from "@/services/api.service";
import {IUser} from "@/types";

const UsersComponent: () => Promise<JSX.Element> = async () => {
    const users = await userService.getAllUsers();

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
