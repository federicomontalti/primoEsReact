import { useState } from "react";

export function TextComponent() {
    //stato che contiene l'input dell'utente
    const [text, setText] = useState<string>("nome"); 
    const [password, setPassword] = useState<string>(""); 

    return <>
        <div>TextComponent</div>
        {/*componente controllato: es. value={text} viene controllato da noi che gli passiamo un valore*/}
        {/*componente non-controllato: es. defaultValue={text} cambia da solo*/}
        <div>Username: <input type="text" placeholder="Inserisci nome" value={text} onChange={(ev) => {
                //console.log(ev.target.value);
                setText(ev.target.value);
            }}/>
            <button onClick={() => {
                setText("");
            }}>Cancella</button>
        </div>
        <div>Username: {text}</div> {/*text è uno stato*/}

        <div>Password: <input type="text" placeholder="Inserisci password" defaultValue={"password"} onChange={(ev) => {
            setPassword(ev.target.value);
        }}/></div>
        <div>Password: {password}</div>
    </>
}