import React from 'react'
import {Icon, type IconProps} from "@/shared/ui/Icon/Icon.tsx";
import type {audienceCardsType} from "@/data/audienceCards.ts";
import s from "./userRoles.module.css";
import arrow from "@/assets/img/Icon-4.svg";

export const UserRoles: React.FC<audienceCardsType> = ({icon, title, description}) => (
    <div className={s.featureCardWrap}>
        <Icon id={icon as IconProps["id"]} size={52}/>
        <div className={s.textDescriptionWrap}>
            <h3>{title}</h3>
            <p className={`${s.textDescription} textSecondary`}>{description}</p>
            <a className={s.link} href="#">
                See more
                <img src={arrow} alt={'button'}/>
            </a>
        </div>
    </div>
)
