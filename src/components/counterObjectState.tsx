import { useState } from "react";
import Display from "./display";

interface State {  //interfaccia che rappresenta il tipo del nostro stato
    readonly value: number //readonly così siamo obbligati a creare un nuovo oggetto per aggiornare lo stato
};

export default function CounterObjectState() {
    const [state, setState] = useState<State>({value: 0});
    console.log("App()", {state});

    return <>
        <Display n={state.value} color="red"/>
        <button onClick={() => {

            //modifica la proprietà già esistente di value
            //cambia il valore ma non viene aggiornata la pagina
            //state.value = state.value + 1;
            //const newState2 = state; //crea un nuovo puntatore all'oggetto precedente

            //crea un nuovo oggetto value
            //in un sistema basato su riferimenti, per cambiare lo stato di React è necessario cambiare direttamente il riferimento
            const newState: State = {value: state.value + 1};
            setState(newState);
            //se facciamo una scrittura inline la funziona sa già il tipo che deve avere l'input

            //...state assegna il valore di state
            //assegnamo a newState2 tutte le proprietà di state, poi scegliamo quale cambiare
            const newState2: State = {
                ...state,
                value: state.value + 1
            };
            setState(newState2);

            console.log('Click, contatore: ', newState2)
        }}>Premi qui</button>
        {state.value >= 5 && <div>Attenzione! Maggiore di 5</div>}
    </>
}