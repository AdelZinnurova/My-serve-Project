import styles from './List.module.css';

export const List = () => {
    return (
        <ul className={styles.list}>
            <li>Home</li>
            <li>Product</li>
            <li>Users</li>
            <li>About us</li>
            <li>Contacts</li>
        </ul>
    );
};