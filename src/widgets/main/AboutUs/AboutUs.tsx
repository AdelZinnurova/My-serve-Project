import s from './AboutUs.module.css';
// import icon8 from "@/assets/img/Icon-8.svg";
// import icon9 from "@/assets/img/Icon-9.svg";

export const AboutUs = () => {
    return (
        <section id="section4" className={s.aboutUs}>
            <h2>About us</h2>
            <div className={s.aboutUsCardWrap}>
                <article className={s.aboutUsCard}>
                    <div className={s.content}>
                        <span className={s.number}>01</span>
                        <h3 className={s.title}>Who we are?</h3>
                        <div className={s.descriptionWrapp}>
                            <p className={s.description}>We revolutionize the way freelancers connect with workspaces and
                                clients, enabling service providers
                                to work flexibly and businesses to maximize their potential
                            </p>
                            <p className={s.description}>
                                Our platform seamlessly integrates people, services, workspaces-breaking barriers,
                                optimizing opportunities, and shaping the future of the service economy
                            </p>
                        </div>

                    </div>
                    {/*<img className={s.icon8} src={icon8} alt="Icon-8"/>*/}
                </article>
                <article className={s.aboutUsCard}>
                    <div className={s.content}>
                        <span className={s.number}>02</span>
                        <h3 className={s.title}>Our mission</h3>
                        <div className={s.descriptionWrapp}>
                            <p className={s.description}>Our mission is to empower talents and entrepreneurs in the service
                                industry-helping freelancers
                                thrive, business owners maximize earnings, and customers seamlessly organize their lifestyle
                            </p>
                            <p className={s.description}>
                                We create a smart, supportive ecosystem that connects professionals with opportunities and
                                ensures effortless access to services, anytime and anywhere
                            </p>
                        </div>
                    </div>
                    {/*<img className={s.icon9} src={icon9} alt="Icon-9"/>*/}
                </article>
            </div>
        </section>
    )
}