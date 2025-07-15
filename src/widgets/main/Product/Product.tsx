import { Button } from "@/shared/ui/Button/Button";
import s from "./Product.module.css";
import { FEATURES } from "@/data";
import { FeatureCard } from "@/widgets/main/Product/FeatureCard/FeatureCard";

export const Product = () => (
    <section className={s.sectionProduct}>
        <h2>MyServe created for</h2>
        <div className={s.cardWrap}>
            {FEATURES.map((feature) => (
                <FeatureCard key={feature.icon} {...feature} />
            ))}
        </div>
        <Button title="Register" />
    </section>
);
