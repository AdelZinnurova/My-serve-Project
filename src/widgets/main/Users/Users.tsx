import {usersCard} from "@/data/usersCard.ts";
import {UsersCard} from "@/widgets/main/Users/UsersCard/UsersCard.tsx";
import {Container} from "@/app/layout/Container";
import s from './Users.module.css';

export const Users = () => {
    return (
        <section id="section3" className={s.usersSection}>
            <Container>
                <div className={s.sectionWrap}>
                    <h2 className={s.usersTitle}>Why MyServe is the perfect fit for you?</h2>
                    <div className={s.usersCardsWrap}>
                        {usersCard.map((card) => (
                            <UsersCard key={card.id} {...card}/>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}