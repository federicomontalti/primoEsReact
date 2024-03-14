//import styles from './App.module.scss';
//import logo from "./assets/logo512.png";
//import Counter from './components/counter';
//import CounterObjectState from './components/counterObjectState';
//import { TextComponent } from './components/textcomponent';
//import { MiddleComponent } from './components/middleComponent';
//import { MyCustomInput } from './components/myCustomInput';
import { useState } from 'react';
import { PersonInput } from './components/personInput';


// export default function App() {
//   const [text, setText] = useState("");

//   return <>
//     <div>App</div>
//     {/* <Counter /> */}
//     {/* <Counter /> */}
//     {/* <CounterObjectState /> */}
//     {/* <TextComponent /> */}
//     {/*<MyCustomInput label={"Nome"} required={true} onChange={text => {  //questo text è ciò che ci passa la funzione
//       //implementazione del callback
//       console.log(text)
//       setText(text);
//     }}/> */}
//     {/* <MyCustomInput label={"Cognome"} required={false} onChange={text => {console.log(text)}}/> */}
//     {/* <div>Testo in App.tsx: {text}</div> */}

//     <MiddleComponent onChange={text => {
//       console.log(text)
//       setText(text);
//     }} />
//     <div>Testo in App.tsx: {text}</div>
//   </>
// };



export default function App() {
<<<<<<< HEAD
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <PersonInput label={"Nome"} onChange={setNome} value={nome} />
      <PersonInput label={"Cognome"} onChange={setCognome} value={cognome} />
      <div>
        <button onClick={() => {
          const newResult = `Nome: ${nome}, Cognome: ${cognome}`; 
          setResult(newResult);
        }}>Salva</button>
      </div>
      <div>{result}</div>
    </>
  )
}



=======
  return <>
    <CyclicRenderingComponent />
    {/* {MyComponent} */}
    <div className={styles.title}>
      {/* {<img src={logo} alt="logo" />} */}
      <div>Fitstic React 2024</div> 
    </div>
    <MyComponent />
  </>;
}

>>>>>>> b0c8a6f80492d8b8ddb7f155faa29eafa5c92167
const sum = (n1:number, n2:number) => {
  return n1+n2
}

//bool + "" = per trasformare il bool non normalmente visibile in pagina in stringa
export function MyComponent() {
  /*function sum(n1:number, n2:number) {
    return n1+n2
  }*/
  let risultatoSomma = sum(1,1);

  let num: number = 5;
  let str: string = "Test";
  let bool: boolean = true;

  //Rendering condizionale con variabile di appoggio
  let val: JSX.Element | null = null;
  if (bool === true){
    val = <div>bool è vero</div>;
  } else {
    val = <div>bool è falso</div>;
  }

  let varAppoggio;
  switch(num) {
    case 1: {
      varAppoggio = <div>num è 1</div>;
      break;
    }
    case 2: {
      varAppoggio = <div>num è 2</div>;
      break;
    }
    default: {
      varAppoggio = <div>altro</div>;
      break;
    }
  }

  return <div>
    <div>My component!</div>
    <div>{num}</div>
    <div>{str}</div>
    <div>{bool} Attenzione! I booleani non vengono visualizzati</div> 
    {val}

    {/*Rendering condizionale con operatore ternario*/}
    {bool === true
      ? <div>bool è vero</div> 
      : <div>bool è falso</div>}

<<<<<<< HEAD
    {/*Rendering condizionale con operatore logico AND*/}
=======
    {/*Rendering condizionale con operatore AND*/}
>>>>>>> b0c8a6f80492d8b8ddb7f155faa29eafa5c92167
    {bool === true && <div>bool è vero</div>}

    {null}

    {varAppoggio}

    <div>{risultatoSomma}</div>
    <div>{sum(2,2)}</div>
  </div>;
}

export function CyclicRenderingComponent() {
  let array: number[] = [2, 4, 6, 8];

  let arrayJSX = [];
  for(let i = 0;i < array.length; i++) {
    arrayJSX.push(<div key={i}>Posizione Array {i}: {array[i]}</div>)
  }

  return <>
    {/*usiamo map per trasformare la lista di numeri in una lista di elementi JSX*/}
    <h4>Render ciclico</h4>
    {/*ogni elemento di un array deve avere una chiave unica all'interno di esso (solitamente si usa "index"*/}
    {array.map((item, index) => <div key={index}>Num: {index}: {item}</div>)}
    {arrayJSX}
  </>
}