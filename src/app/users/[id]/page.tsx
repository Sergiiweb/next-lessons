import {FC} from "react";

interface IProps {
    params: {
        id: string
    }
}

const UserPage: FC<IProps> = ({params: {id}}) => {
    return (
        <div>
            UserPage {id}
        </div>
    );
};

export default UserPage;
