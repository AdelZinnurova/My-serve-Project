import {featureProduct} from "@/data/featuresProduct.ts";
import {PlatformFeatures} from "@/widgets/main/Product/platformFeatures/PlatformFeatures.tsx";
import s from './Product.module.css';
import phone1 from "@/assets/img/Phone-1.png";
import phone2 from "@/assets/img/Phone-2.png";
import phone3 from "@/assets/img/Phone-3.png";


export const Product = () => {
    return (
        <section className={s.aiProduct}>
            <div className={s.aiProductInfo}>
                <h2 className={s.aiProductTitle}>Al driven product</h2>
                <div className={s.aiProductFeatures}>
                    {featureProduct.map((feature) => (
                        <PlatformFeatures key={feature.icon} {...feature}/>
                    ))}
                </div>
            </div>
            <div className={s.aiProductCTAImgWrapper}>
                <img className={s.aiProductCTAImg} src={phone1} alt="Phone-1"/>
                <img className={s.aiProductCTAImg} src={phone2} alt="Phone-2"/>
                <img className={s.aiProductCTAImg} src={phone3} alt="Phone-3"/>
            </div>
        </section>
    )
}