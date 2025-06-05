import { songs } from "../data/songs";
import SongCard from "./SongCard";

const SongList = () => {
    return (
        <div 
            style={{
                display:"grid", 
                gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", 
                gap:"20px",
                paddingTop:"20px"
            }}
        >
            {songs.map((song) => (
                <SongCard
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration}
                    image={song.image}
                />
            ))}
        </div>
    )
}

export default SongList;