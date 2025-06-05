import styles from "./SongCard.module.css"

type Props = {
    title: string;
    artist: string;
    duration: string;
    image: string;
};

const SongCard = ({ title, artist, duration, image }: Props) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title}
            className={styles.image} />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.artist}>{artist}</p>
                <p className={styles.duration}>{duration}</p>
        </div>
    )
}

export default SongCard