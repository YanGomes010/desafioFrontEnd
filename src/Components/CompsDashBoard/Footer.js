import styles from "./Footer.module.css"
import profile from "../../images/profile.svg"
import report from "../../images/report.svg"
import home from "../../images/home.svg"
import FooterCards from "./FooterCards"
export default function Footer(){
    return(
        <div className={styles.footer}>
            <FooterCards src={report} text="Relatório"/>
            <FooterCards src={home} text="Inicio"/>
            <FooterCards src={profile} text="Perfil"/>
        </div>
    )
}