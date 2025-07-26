import s from './Home.module.css';
// import {Button} from "@/shared/ui/Button/Button";

export const Home = () => {
    return (
        <section className={s.sectionHome}>
            <div className={s.leftColumn}>
                <h1 className={s.mainHeadline}>Transform your vision of services</h1>
                <p className={`${s.textDescription} textSecondary`}> MyServe is the first three-sided digital marketplace
                    for the service industry that seamlessly connects equipped
                    workspace owners, freelancers and customers</p>
                {/*<Button title={"Explore"}/>*/}
            </div>
            <iframe
                className={s.video}
                src="https://www.youtube.com/embed/d0hXWo5fPdw?si=xFkjbUbGnosW3qwO"
                title="MyServe"
                frameBorder="0"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}/>
        </section>
    );
};