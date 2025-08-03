import {List} from "@/shared/ui/List/List.tsx";
import {Logo} from "@/shared/ui/Logo/Logo.tsx";
import applestore from "@/assets/img/appstore.svg";
import googlestore from "@/assets/img/googleplay.svg";
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footerWrap}>
            <footer className={s.footerSection}>
                <Logo className={s.logo}/>
                <p className={s.text}>© 2025 MyServe. All rights reserved.</p>
                <div className={s.termsAndPolicy}>
                    <a>Privacy Policy</a>
                    <a>Terms of use</a>
                </div>
                <List className={s.checklist}/>
                <div className={s.linkshop}>
                    <a href="https://apps.apple.com/us/app/myserve-inc/id6742311393">
                        <img src={applestore} alt='appstore'/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.myserve">
                        <img src={googlestore} alt='googlestore'/>
                    </a>
                </div>
            </footer>
        </div>
    )
}