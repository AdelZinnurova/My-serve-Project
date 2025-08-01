import {valuesCard} from "@/data/valuesCard.ts";
import {OurValuesCard} from "@/widgets/main/OurValues/OurValuesCard/OurValuesCard.tsx";
import s from './OurValues.module.css';

export const OurValues = () => {
    return (
        <section className={s.sectionWrap}>
            <div className={s.titleWrap}>
                <h2 className={s.title}>Our values</h2>
            </div>
                {valuesCard.map((card) => (
                    <OurValuesCard key={card.icon} {...card}/>
                ))}
        </section>
    )
}