import Arrow from "../../images/arrow_back_black_24dp.svg"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav className={styles.navBar}>
            <header>
                <Link to="../pigz"><img src={Arrow} alt="Arrow"/></Link>
                <h3>Visão Geral</h3>
            </header>
        </nav>
    )
}