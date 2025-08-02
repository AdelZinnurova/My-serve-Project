// import alex from "@/assets/img/AlexIavon.png";
// import vazgen from "@/assets/img/VazgenAr.png";
import icon14 from "@/assets/img/Icon-14.svg";
import icon15 from "@/assets/img/Icon-15.svg";
import icon16 from "@/assets/img/Icon-16.svg";
import icon17 from "@/assets/img/Icon-17.svg";
import s from './Contacts.module.css';


export const Contacts = () => {
    return (
        <section className={s.section}>
            <h2 className={s.title}>Contacts</h2>

            <article className={s.contactWrap}>
                <div className={s.nameWrap}>
                    {/*<img src={alex} alt="Photo"/>*/}
                    <span className={s.name}>Alex Iavon</span>
                    <span className={s.vacancy}>CEO</span>
                    <p className={s.mail}>alex.iavon@myserve.online</p>
                </div>
                <div>
                    <img className={s.icon} src={icon14} alt="Icon"/>
                    <p className={s.info}>228 Park Ave S, PMB 85451, New York</p>
                    <img className={s.icon} src={icon15} alt="Icon"/>
                    <p className={s.info}>info@myserve.online</p>
                </div>
            </article>


            <article className={s.contactWrap}>
                <div className={s.nameWrap}>
                    {/*<img src={vazgen} alt="Photo"/>*/}
                    <span className={s.name}>Vazgen Arutiunian</span>
                    <span className={s.vacancy}>CTO</span>
                    <p className={s.mail}>vazgen.arutiunian@myserve.online</p>
                </div>
                <div>
                    <img className={s.icon} src={icon16} alt="Icon"/>
                    <p className={s.info}>office@myserve.online</p>
                    <img className={s.icon} src={icon17} alt="Icon"/>
                    <p className={s.info}>investors@myserve.online</p>
                </div>
            </article>

        </section>
    )
}