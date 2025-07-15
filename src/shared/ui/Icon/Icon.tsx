import React from "react";
import icon1 from "@/assets/img/Icon-1.svg";
import icon2 from "@/assets/img/Icon-2.svg";
import icon3 from "@/assets/img/Icon-3.svg";
import icon4 from "@/assets/img/Icon-4.svg";

export type IconProps = {
    /** id совпадает с ключами этого мапа */
    id: "icon-1" | "icon-2" | "icon-3" | "icon-4";
    /** размер в пикселях */
    size?: number;
};

const iconsMap: Record<IconProps["id"], string> = {
    "icon-1": icon1,
    "icon-2": icon2,
    "icon-3": icon3,
    "icon-4": icon4,
};

export const Icon: React.FC<IconProps> = ({ id, size = 52 }) => {
    const src = iconsMap[id];
    return <img src={src} width={size} height={size} alt={id} aria-hidden="true" />;
};
