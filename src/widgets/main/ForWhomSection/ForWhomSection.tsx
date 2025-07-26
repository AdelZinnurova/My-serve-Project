// import { Button } from "@/shared/ui/Button/Button.tsx";
import s from "./ForWhomSection.module.css";
import { UserRoles } from "@/widgets/main/ForWhomSection/userRoles/userRoles.tsx";
import {audienceCards} from "@/data/audienceCards.ts";

export const ForWhomSection = () => (
    <section className={s.sectionProduct}>
        <h2>MyServe created for</h2>
        <div className={s.cardWrap}>
            {audienceCards.map((feature) => (
                <UserRoles key={feature.icon} {...feature} />
            ))}
        </div>
        {/*<Button title="Register" />*/}
    </section>
);
