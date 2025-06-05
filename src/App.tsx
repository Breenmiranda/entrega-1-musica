import './App.css';
import Navbar from "./components/Navbar"
import Container from "./components/Container";
import SongSection from "./components/SongSection";
import { songs } from "./data/songs";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <SongSection title="Recientes" songs={songs} />
        <SongSection title="Top 10" songs={songs} />
        <SongSection title="Creado para ti" songs={songs} />
        <SongSection title="Un poco de todo" songs={songs} />
      </Container>
    </>
  )
}


export default App;
