import Input from "../Form/Input"
import Button from "./Button"
import styles from "./SecondCard.module.css"
import ButtonQR from "./ButtonQR"
export default function SecondCard({title}){
    return(
        <div className={styles.card}>
        <h4>{title}</h4>
        <span>Número de Identificação</span>
        <div className={styles.boxInput}>
            <Input type="text" src=""/>
           <Button text="OK"/>
        </div>
        <ButtonQR/>
        </div>
        
    )
}