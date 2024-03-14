import { useState } from "react";

export function MyCustomInput(props: { //props da fare sempre readonly
    readonly label: string;
    readonly required: boolean; 
    
    //Callback da ricevere in input
    //serve per passare al genitore un contenuto informativo
    //
    //in questo caso, passa al genitore il testo dell'input ogni volta che questo (il testo) cambia
    readonly onChange: (text: string) => void //solitamente i callback non hanno un return
}) {
    const {label, required, onChange} = props;
    const [text, setText] = useState<string>(""); 

    return <>
        <div>
            <div>
                <label>{label} {required === true && <span>* </span>}</label>
                <input type="text" value={text} onChange={ev => {
                    setText(ev.target.value)
                    onChange(ev.target.value)  //avverte la funzione in App e gli passa il valore
                }}/>
            </div>
            {text.length === 0 && required === true && <div>* Campo obbligatorio</div>}
        </div>
    </>
}