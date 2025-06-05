import styles from "./Navbar.module.css"
import logo from "../assets/Spotify_icon.svg"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Spotify Logo" />
                <span>Spotify</span>
            </div>
            <div className={styles.search}>
                <input type="text" placeholder="¿Qué querés reproducir?" />
            </div>
            <button className={styles.button}>Iniciar sesión</button>
        </nav>
    )
}

export default Navbar;