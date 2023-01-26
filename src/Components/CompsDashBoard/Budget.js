import Styles from "./Budget.module.css"
import View from "../../images/eye_white.svg"
export default function Budget(){
    return(
        <div className={Styles.cardBudget}>
            <div>
                <h4>Ganhos do dia</h4>
                <p>29/07</p>
            </div>
            <div>
                <h4 className={Styles.budget}>
                    R$ 150
                </h4>
                <img src={View} alt="View"/>
            </div>
        </div>
    )
}