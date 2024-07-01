import {IUser} from "../../types";

const UsersComponent = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    return (
        <div>
            <ul>
                {
                    users.map((user: IUser) => (
                        <li key={user.id}>{user.id} {user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersComponent;
