import s from './Home.module.css';
import {Container} from "@/app/layout/Container";
import applestore from "@/assets/img/appstore.svg";
import googlestore from "@/assets/img/googleplay.svg";

export const Home = () => {
    return (
        <section id="section1" className={s.sectionHome}>
            <Container>
                <div className={s.sectionWrap}>
                    <div className={s.leftColumn}>
                        <h1 className={s.mainHeadline}>Transform your vision of services</h1>
                        <span className={s.name}>MyServe</span>
                        <p className={s.textDescription}> is the first three-sided digital marketplace
                            for the service industry that seamlessly connects equipped
                            workspace owners, freelancers and customers</p>
                        <div className={s.linkshop}>
                            <a href="https://apps.apple.com/us/app/myserve-inc/id6742311393">
                                <img src={applestore} alt='appstore'/>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.myserve">
                                <img src={googlestore} alt='googlestore'/>
                            </a>
                        </div>
                    </div>
                    <iframe
                        className={s.video}
                        src="https://www.youtube.com/embed/d0hXWo5fPdw?si=xFkjbUbGnosW3qwO"
                        title="MyServe"
                        frameBorder="0"
                        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}/>
                </div>
            </Container>
        </section>
    );
};