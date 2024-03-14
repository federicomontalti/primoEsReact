import { useState } from "react";
import Display from "./display";

export default function Counter() {
    //Definizione di uno stato di tipo number inizializzato a 0 / Consigliato impostazione const
    //contatore --> nome del nostro stato (di tipo number perchè abbiamo messo useState(0))
    //setContatore --> funzione per cambiare lo stato della variabile contatore
    const [contatore, setContatore] = useState(0);
    console.log("App()", {contatore});

    return <>
        {/*viene ridisegnato anche Display, perchè cambia la sua prop*/}
        <Display n={contatore} color="red"/>
        <button onClick={() => {
            //setContatore(contatore + 2);
            //setContatore(contatore + 1);  //i setState vengono raggruppati ed eseguiti in successione, se sono uguali esegue solo l'ultimo
            setContatore(partial => partial + 2); 
            setContatore(partial => partial + 1); //partial prende il valore corrente, quindi aumenterà di 3
            console.log('Click, contatore: ', {contatore})  //il valore di contatore qui cambierà solo dopo il ridisegnamento del componente
        }}>Premi qui</button> {/*funzione che viene chiamata dal browser, a cui viene passato un evento*/}
        {contatore >= 5 && <div>Attenzione! Maggiore di 5</div>}
    </>
}