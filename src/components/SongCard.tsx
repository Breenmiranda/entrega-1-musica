type Props = {
    title: string;
    artist: string;
    duration: string;
    image: string;
};

const SongCard = ({ title, artist, duration, image }: Props) => {
    return (
        <div style={{border: "1px solid #ccc", padding: "10px", borderRadius: "8px"}}>
            <img src={image} alt={title} style={{ width: "100%", borderRadius:"4px"}} />
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{duration}</p>
            <button style={{ padding: "5px 10px", background: "#282c34", color:"white", border: "none", borderRadius: "4px"}}>
                ⏯ Play
            </button>
        </div>
    )
}

export default SongCard;