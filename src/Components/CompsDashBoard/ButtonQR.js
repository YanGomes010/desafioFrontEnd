import styles from "./ButtonQR.module.css"
import QR from "../../images/QrCode.svg"
export default function ButtonQR(){
    return(
        <div className={styles.boxA}>
            <img src={QR} alt=""/>
    <a href="/">Escanear Qrcode</a>
    </div>
    )    
}