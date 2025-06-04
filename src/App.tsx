import Navbar from "./components/Navbar"
import Container from "./components/Container";
import SongSection from "./components/SongSection";
import { songs } from "./data/songs";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <SongSection title= "🎵 Los más escuchados" songs={songs} />
        <SongSection title= "🔝 Top 10" songs={songs} />
        <SongSection title= "🔔 Creado para ti" songs={songs} />
        <SongSection title= "🧡 Tus me gusta" songs={songs} />
      </Container>
    </>
  )
}

export default App;
