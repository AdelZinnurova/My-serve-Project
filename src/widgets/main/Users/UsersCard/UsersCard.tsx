import type {usersCardType} from "@/data/usersCard.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import s from './UsersCard.module.css';

export const UsersCard: React.FC<usersCardType> = ({id, title, description}) => {
    return (
        <div className={s.usersCard} id={id}>
            <div>
                <h3 className={s.userCardTitle}>{title}</h3>
                <p>{description}</p>
            </div>
            <Button title={"Learn more"}/>
        </div>
    )
}