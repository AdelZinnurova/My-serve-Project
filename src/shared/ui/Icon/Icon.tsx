import React from "react";
import icon1 from "@/assets/img/Icon-1.svg";
import icon2 from "@/assets/img/Icon-2.svg";
import icon3 from "@/assets/img/Icon-3.svg";
import icon4 from "@/assets/img/Icon-4.svg";
import icon5 from "@/assets/img/Icon-5.svg";
import icon6 from "@/assets/img/Icon-6.svg";
import icon7 from "@/assets/img/Icon-7.svg";
import icon8 from "@/assets/img/Icon-8.svg";
import icon9 from "@/assets/img/Icon-9.svg";
import icon10 from "@/assets/img/Icon-10.svg";
import icon11 from "@/assets/img/Icon-11.svg";
import icon12 from "@/assets/img/Icon-12.svg";
import icon13 from "@/assets/img/Icon-13.svg";

export type IconProps = {
    id: "icon-1" | "icon-2" | "icon-3" | "icon-4" | "icon-5" | "icon-6" | "icon-7" | "icon-8" | "icon-9" | "icon-10" | "icon-11" | "icon-12" | "icon-13";
    size?: number;
    className?: string;
    width?: number;
    height?: number;
};

const iconsMap: Record<IconProps["id"], string> = {
    "icon-1": icon1,
    "icon-2": icon2,
    "icon-3": icon3,
    "icon-4": icon4,
    "icon-5": icon5,
    "icon-6": icon6,
    "icon-7": icon7,
    "icon-8": icon8,
    "icon-9": icon9,
    "icon-10": icon10,
    "icon-11": icon11,
    "icon-12": icon12,
    "icon-13": icon13,
};

export const Icon: React.FC<IconProps> = ({ id, size = 52, width, height, className }) => {
    const src = iconsMap[id];
    const finalWidth = width ?? size;
    const finalHeight = height ?? size;
    return <img src={src} width={finalWidth} height={finalHeight} alt={id} aria-hidden="true" className={className}/>;
};
