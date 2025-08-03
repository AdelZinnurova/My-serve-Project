import s from './Header.module.css';
import {Logo} from "@/shared/ui/Logo/Logo.tsx";
import {List} from "@/shared/ui/List/List.tsx";
import { Container } from "@/app/layout/Container";

export const Header = () => {
    return (
        <div className={s.fixedWrapper}>
            <Container>
                <nav className={s.header}>
                    <Logo/>
                    <List className={s.lists}/>
                </nav>
            </Container>
        </div>
    );
};