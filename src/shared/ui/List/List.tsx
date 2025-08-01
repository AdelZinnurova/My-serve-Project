import s from './List.module.css';

export const List = () => {
    return (
        <ul className={s.list}>
            <li><a>Home</a></li>
            <li><a>Product</a></li>
            <li><a>Users</a></li>
            <li><a>About us</a></li>
            <li><a>Contacts</a></li>
        </ul>
    );
};