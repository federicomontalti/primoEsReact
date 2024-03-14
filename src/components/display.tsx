//import { Point } from "../lezione1";
import styles from "./display.module.scss"

export default function Display(props: {
    n: number, 
    color?: string
    //obj?: Point  --> in App andra poi messo: "obj={{x:1, y:1}}"
}) {
    const { n, color = 'green'} = props;
    //const coloreDaUsare = color ?? "green";
    //return <div style={{ color: color != null ? color: "green" }}>{ n }</div>
    return <div className={styles.display} style={{ color: color }}>{ n }</div>
}

//props: {n: number} --> svolge la stessa funzione di un'interfaccia
/*export default function Display({ n }: {n: number}) {  //props ha una proprietà number di nome "n"
    //const { n } = props;
    return <div>{ n }</div>
}
*/