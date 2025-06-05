import SongCard from "./SongCard";
import type { Song } from "../Types";
import styles from "./SongSection.module.css"

type Props = {
    title: string;
    songs: Song[];
};

const SongSection = ({ title, songs }: Props) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.grid}>
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
        </section>
    );
};

export default SongSection;