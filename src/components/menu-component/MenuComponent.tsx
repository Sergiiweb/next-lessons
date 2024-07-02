import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul className="flex justify-around">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link href={'/meals'}>Meals</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;
