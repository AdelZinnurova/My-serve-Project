import {Button} from "@/shared/ui/Button/Button.tsx";
import {featureProduct} from "@/data/featuresProduct.ts";
import {PlatformFeatures} from "@/widgets/main/Product/platformFeatures/platformFeatures.tsx";
import phones from "@/assets/img/Product.webp";
// import phones from "@/assets/img/Phones.jpg";


export const Product = () => {
    return (
        <section>
            <h2>Al driven product</h2>
            {featureProduct.map((feature) => (
                <PlatformFeatures key={feature.icon} {...feature}/>
            ))}
            <Button title="Join now"/>
            <img src={phones} alt="Product"/>
        </section>
    )
}