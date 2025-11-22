import { Link } from "react-router";
import styles from "./navbar.module.css";

function NavBar() {
    
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/shop">Shop</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;