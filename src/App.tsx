import { useEffect, useMemo, useState } from 'react';
//import styles from './App.module.scss';
//import logo from "./assets/logo512.png";
//import Counter from './components/counter';
//import CounterObjectState from './components/counterObjectState';
//import { TextComponent } from './components/textcomponent';
//import { MiddleComponent } from './components/middleComponent';
//import { MyCustomInput } from './components/myCustomInput';
//import { PersonInput } from './components/personInput';
//import Interval from './components/interval';
import { ToDoList } from './components/toDoList/toDoList';

export default function App() {

  return <>
    <ToDoList />
  </>
}

// function calcolo(n: number) {
//   console.log("esecuzione calcolo n:", n);
//   return n*2;
// }

// export default function App() {
//   const [text, setText] = useState("");

//   const[value, setValue] = useState(10);

//   //finchè non cambia il valore di value questo hook "useMemo" verrà invocato solo la prima volta
//   const risultatoCalcolo = useMemo(() => {
//     return calcolo(value);
//   }, [value])

//   /*
//     Se nello useEffect si definisce come lista di dipendenze l'array vuoto lì,
//     allora l'effetto viene invocato al mount del componente
//   */
//   useEffect(() => {
//     console.log("useEffect evento di mount");
//     return() => {
//       console.log("return evento di mount");
//     }
//   }, []); //con le quadre vuote si avvia solo al primo avvio del componente

//   console.log("render App()");

//   return <>
//     <div>App</div>
//     {/* {value !== 20 && <Interval />} */}
//     <div>risultato calcolo: {risultatoCalcolo}</div>

//     {/* <Counter /> */}

//     {/*
//       Se cambio una prop qualsiasi il componente viene ridisegnato
//       Se cambia la prop key il componente viene reinizializzato (tutti gli stati tornano al valore iniziale)
//     */}
//     {/* <Counter initialValue={10}/> */}
//     {/* <Counter key={value}/> */}

//     <button onClick={() => setValue(20)}>imposta a 20</button>
//     <div>value: {value}</div>

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



//___PULSANTE SALVA STAMPA NOME E COGNOME UTENTE___

// export default function App() {
//   const [nome, setNome] = useState("");
//   const [cognome, setCognome] = useState("");
//   const [result, setResult] = useState("");

//   return (
//     <>
//       <PersonInput label={"Nome"} onChange={setNome} value={nome} />
//       <PersonInput label={"Cognome"} onChange={setCognome} value={cognome} />
//       <div>
//         <button onClick={() => {
//           const newResult = `Nome: ${nome}, Cognome: ${cognome}`; 
//           setResult(newResult);
//         }}>Salva</button>
//       </div>
//       <div>{result}</div>
//     </>
//   )
// }



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

    {/*Rendering condizionale con operatore logico AND*/}

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