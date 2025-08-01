import type {valuesCardType} from "@/data/valuesCard.ts";
import {Icon, type IconProps} from "@/shared/ui/Icon/Icon.tsx";
import s from './OurValuesCard.module.css';

export const OurValuesCard: React.FC<valuesCardType> = ({icon, title, description}) => {
    return (
        <div className={s.cardWrapp}>
            <div>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
            </div>
            <Icon id={icon as IconProps["id"]} size={52}/>
        </div>
    )
}