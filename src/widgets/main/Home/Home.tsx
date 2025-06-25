import styles from './Home.module.css';
import {Button} from "@/shared/ui/Button/Button.tsx";

export const Home = () => {
    return (
        <section className={styles.section}>
            <div className={styles.leftColumn}>
                <h1 className={styles.mainHeadline}>Transform your vision of services</h1>
                <p className={styles.text}>MyServe is the first three-sided digital marketplace for the service industry that seamlessly connects
                    equipped workspace owners, freelancers, and customers</p>
                <Button title={"Explore"}/>
            </div>
            <div>
                <iframe
                    src={"https://youtu.be/d0hXWo5fPdw?si=AFrqY7MoyqWDFOdj"}
                    title="MyServe Video"
                    frameBorder="0"
                ></iframe>
            </div>
        </section>
    );
};