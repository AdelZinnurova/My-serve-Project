import {Icon, type IconProps} from "@/shared/ui/Icon/Icon.tsx";
import React from "react";
import type {featureProductType} from "@/data/featuresProduct.ts";


export const PlatformFeatures: React.FC<featureProductType> = ({icon, description}) => {
    return (
        <div>
            <Icon id={icon as IconProps["id"]} size={52}/>
            <p>{description}</p>
        </div>
    )
}