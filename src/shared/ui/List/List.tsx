// import s from './List.module.css';

type ListProps = {
    className?: string
}

export const List = ({className}: ListProps) => {
    return (
        <ul className={className}>
            <li><a>Home</a></li>
            <li><a>Product</a></li>
            <li><a>Users</a></li>
            <li><a>About us</a></li>
            <li><a>Contacts</a></li>
        </ul>
    );
};