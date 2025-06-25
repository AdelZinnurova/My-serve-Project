import './App.css'
import {Header} from "@/widgets/header/Header.tsx";
import {Container} from "@/app/layout/Container.tsx";
import {Main} from "@/widgets/main/Main.tsx";

function App() {
  return (
    <Container>
        <Header/>
        <Main/>
    </Container>
  )
}

export default App
