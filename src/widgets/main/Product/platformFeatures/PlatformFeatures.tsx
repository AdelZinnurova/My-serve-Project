import {Icon, type IconProps} from "@/shared/ui/Icon/Icon.tsx";
import React from "react";
import type {featureProductType} from "@/data/featuresProduct.ts";
import s from './PlatformFeatures.module.css';


export const PlatformFeatures: React.FC<featureProductType> = ({icon, description}) => {
    return (
        <div className={s.aiProductFeature}>
            <Icon id={icon as IconProps["id"]} size={52}/>
            <p className={s.descriptipon}>{description}</p>
        </div>
    )
}