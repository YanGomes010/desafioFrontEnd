import logo from "../../images/pigz-logotipo-branco.svg"
import Form from "../Form/Form"
import styles from "./Login.module.css"


export default function LoginPage(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <img alt="Logo" src={logo}/>
                <span>Para entregadores</span>
            </div>
            <Form/>
        </div>
    )
}