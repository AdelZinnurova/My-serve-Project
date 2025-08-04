import s from './Numbers.module.css';
import {Container} from "@/app/layout/Container";

export const Numbers = () => {
    return (
        <section className={s.sectionWrap}>
            <Container>
                <div className={s.numbersWrap}>
                    <h2>Let’s talk aspirations in numbers</h2>
                    <p className={s.description}>Before securing our Series B funding, we aim to achieve</p>
                    <div className={s.cardsWrap}>
                        <div className={s.cardWrap}>
                            <span className={s.number}>5 000</span>
                            <span className={s.forWho}>workspaces</span>
                            <span className={s.lastSpan}>launched</span>
                        </div>
                        <div className={s.cardWrap}>
                            <span className={s.number}>6 500</span>
                            <span className={s.forWho}>freelancers</span>
                            <span className={s.lastSpan}>onboarded</span>
                        </div>
                        <div className={s.cardWrap}>
                            <span className={s.number}>75 000</span>
                            <span className={s.forWho}>customers</span>
                            <span className={s.lastSpan}>served</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}