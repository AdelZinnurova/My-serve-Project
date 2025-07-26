import styles from './Header.module.css';
import {Logo} from "@/shared/ui/Logo/Logo.tsx";
import {List} from "@/shared/ui/List/List.tsx";
// import {Button} from "@/shared/ui/Button/Button.tsx";

export const Header = () => {
    return (
        <nav className={styles.header}>
            <Logo/>
            <List/>
            {/*<Button title={"Register"}/>*/}
        </nav>
    );
};