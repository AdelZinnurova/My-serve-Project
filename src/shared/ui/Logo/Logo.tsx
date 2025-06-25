import styles from './Logo.module.css';
import logo from "@/assets/img/Logo.svg";

export const Logo = () => {
    return (
        <>
            <img src={logo} alt="logo" className={styles.logo}/>
        </>
    );
};