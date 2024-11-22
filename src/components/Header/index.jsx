import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <span>Lides</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/localizar">Localizar</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Header