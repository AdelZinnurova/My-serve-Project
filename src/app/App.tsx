import './App.css'
import s from './App.module.css';
import {Header} from "@/widgets/header/Header.tsx";
import {Main} from "@/widgets/main/Main.tsx";
import {Footer} from "@/widgets/footer/Footer.tsx";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
