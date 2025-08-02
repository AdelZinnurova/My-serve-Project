import './App.css'
import {Header} from "@/widgets/header/Header.tsx";
import {Main} from "@/widgets/main/Main.tsx";
import {Container} from "@/app/layout/Container.tsx";
import {Footer} from "@/widgets/footer/Footer.tsx";

function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    )
}

export default App
