import alex from "@/assets/img/aleksandr.iavon.jpg";
import vazgen from "@/assets/img/vazgen.arutiunian.jpg";
import icon14 from "@/assets/img/Icon-14.svg";
import icon15 from "@/assets/img/Icon-15.svg";
import icon16 from "@/assets/img/Icon-16.svg";
import icon17 from "@/assets/img/Icon-17.svg";
import s from './Contacts.module.css';


export const Contacts = () => {
    return (
        <section id="section5" className={s.section}>
            <h2 className={s.title}>Contacts</h2>
            <div className={s.articleWrap}>
                <article className={s.left}>
                    <img className={s.photo} src={alex} alt="Photo"/>
                    <div className={s.nameWrap}>
                        <div className={s.nameAndVacancy}>
                            <h3 className={s.name}>Alex Iavon</h3>
                            <span className={s.vacancy}>CEO</span>
                        </div>
                        <a href="mailto:alex.iavon@myserve.online" className={s.mail}>alex.iavon@myserve.online</a>
                    </div>
                </article>
                <article className={s.left}>
                    <img className={s.photo} src={vazgen} alt="Photo"/>
                    <div className={s.nameWrap}>
                        <div className={s.nameAndVacancy}>
                            <h3 className={s.name}>Vazgen Arutiunian</h3>
                            <span className={s.vacancy}>CTO</span>
                        </div>
                        <a href="mailto:vazgen.arutiunian@myserve.online"
                           className={s.mail}>vazgen.arutiunian@myserve.online</a>
                    </div>
                </article>
            </div>

            <div className={s.linkWrap}>
                <a className={s.link} href="https://maps.app.goo.gl/guzy7VicUvmFuA63A"><img src={icon14} alt='icon'/><span>228 Park Ave S, PMB 85451, New York</span></a>
                <a className={s.link} href="mailto:info@myserve.online"><img src={icon15} alt='icon'/><span>info@myserve.online</span></a>
                <a className={s.link} href="mailto:support@myserve.online"><img src={icon16} alt='icon'/><span>support@myserve.online</span></a>
                <a className={s.link} href="mailto:investors@myserve.online"><img src={icon17} alt='icon'/><span>investors@myserve.online</span></a>
            </div>
        </section>
    )
}