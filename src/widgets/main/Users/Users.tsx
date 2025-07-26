import {usersCard} from "@/data/usersCard.ts";
import {UsersCard} from "@/widgets/main/Users/UsersCard/UsersCard.tsx";
import s from './Users.module.css';

export const Users = () => {
    return (
        <section className={s.usersSection}>
            <h2 className={s.usersTitle}>Why MyServe is the perfect fit for you?</h2>
            <div className={s.usersCardsWrap}>
                {usersCard.map((card) => (
                    <UsersCard key={card.id} {...card}/>
                ))}
            </div>
        </section>
    )
}