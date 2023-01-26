import Budget from "../CompsDashBoard/Budget"

import Card from "../CompsDashBoard/Card"
import Footer from "../CompsDashBoard/Footer"
import Navbar from "../CompsDashBoard/NavBar"
import SecondCard from "../CompsDashBoard/SecondCard"

import Styles from "./Dashboard.module.css"

export default function Dashboard(){
    return(
        <div className={Styles.containerAll}>
           <Navbar/>
           <Budget/>
           <Card title="Resumo das entregas"/>
           <SecondCard title="Iniciar Nova Entrega"/>
           <Footer/>
        </div>
        
    )
}