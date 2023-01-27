import styles from "./ButtonDefault.module.css"

export default function Button({src,text,className}){
    return(
        <div className={styles.containerBoxA}>
        <div className={styles.boxA}>
    <a className={className} href="/"><img src={src} alt=""/><span>{text}</span></a>
    
    </div>
    </div>
    )    
}