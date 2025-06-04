import SongCard from "./SongCard";
import type { Song } from "../data/songs";

type Props = {
    title: string;
    songs: Song[];
};

const SongSection = ({ title, songs }: Props) => {
    return (
        <section style={{ marginBottom: "40px"}}>
            <h2 style={{ marginBottom: "16px"}}>{title}</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                }}
            >
                {songs.map((song) => (
                    <SongCard
                        key={song.id}
                        title={song.title}
                        artist={song.title}
                        duration={song.duration}
                        image={song.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default SongSection;