export default{}

console.log("Ciao");

//let array:number[] = [1,2,"test", true];

//Enumeratori
enum WeekDays {  //set di valori finiti; sono dei tipi che ci inventiamo
  MONDAY,
  THURSDAY,
  WEDNESDAY
}
let myDay: WeekDays = WeekDays.MONDAY;
let dayArray: WeekDays[] = [
  WeekDays.MONDAY,
  WeekDays.THURSDAY,
  WeekDays.WEDNESDAY
]

//Operazioni con gli array
let array = [1,2,3,4];
console.log(array);
array.push(5);
console.log(array);

let nuovoArray = array.concat(6);
console.log("array", array);
console.log("muovoArray", nuovoArray);

const arrayImmutabile = [1,2,3];
arrayImmutabile.push(4);

//Oggetti e strutture dati
let punto = {
  x:3, y:7
}

interface Point {
  x:number;
  readonly y:number;
  readonly z?:number; // ? rende la proprietà opzionale
}

const mioPunto:Point = {
  x: 5,
  y: 6
}

//mioPunto.x = 10 //si può fare, perchè non stiamo cambiando la const, ma la proprietà all'interno e la variabile non è readonly

interface Point3d extends Point {
  //readonly x: number; //queste proprietà non sono da ripetere perchè ereditate da Point
  //readonly y: number;
  z: number;
}

const punto3d:Point3d = {
  x: 1,
  y: 1,
  z: 1
}
console.log(punto3d);

const { x, y, z} = punto3d;  //da una struttura dati prendo delle proprietà
console.log("x: ", x);

//const punto3d2:Point3d = punto3d;  //con questa sintassi anche punto3d diventerà: {x: 1, y: 1, z: 2}
const punto3d2:Point3d = { ...punto3d }; //con questa sintassi prendo tutte le proprietà da punto3d e le copio dentro questo oggetto "clone"
console.log("punti iniziali:");
console.log("punto3d: ", punto3d);
console.log("punto3d2: ", punto3d2);
punto3d2.z = 2; 
console.log("punti modificati:"); 
console.log("punto3d: ", punto3d);  //il risultato sarà: {x: 1, y: 1, z: 1}
console.log("punto3d2: ", punto3d2);  //il risultato sarà: {x: 1, y: 1, z: 2}


//Funzioni
console.log("sum", sum(2,3)); // in Javascript le funzioni sono disponibili in tutto lo scope, quindi possiamo richiamarla in una riga sopra
function sum(n1:number, n2:number):number { // i tipi dentro le parentesi sono da specificare
  return n1 + n2;
}

interface Sum { //interfaccia funzionale
  (n3: number, n2: number): number;  //definiamo cosa si aspetta e cosa restituisce/quando usato viene controllato solo il tipo, non il nome
}

const sum2:Sum = (n1, n2) => {  //così facendo viene assegnata una funzione ad una variabile / i tipi sono già specificati in interfaccia
  return n1 + n2;
}
console.log("sum2", sum2(2,3)); // la costante sum2 non esiste prima della riga in cui la dichiaro, quindi console.log va dopo

/* versione accorciata
const sum2:Sum = (n1, n2) => n1 + n2;
console.log("sum2", sum2(2,3));
*/

interface PuntoConFunzione {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly sum: Sum; //si comporta come gli altri tipi, quindi lo possiamo usare qui
}

const mioPuntoConFunzione:PuntoConFunzione = {
  x: 2,
  y: 4,
  //sum:sum2
  sum: (n1: number, n2: number) => {
    return n1 + n2
  }
}


//Funzioni classiche della programmazione funzionale
//Map
const arr1 = [1,2,3];
const risultato = arr1.map(item => (item % 2) === 0); //il risultato non è necessariamente dello stesso tipo, dipenda dalla funzione di trasformazione
console.log("arr1", arr1);
console.log("risultato", risultato);

//Filter
const arr2 = [1,2,3];
const risultato2 = arr2.filter(item => (item % 2) === 0);
console.log("arr2", arr2);
console.log("risultato2", risultato2);


const arr3: number[] = null as any;  //se l'array è null la funzione darà errore exception
const risultato3 = arr3?.map(item => (item % 2) === 0) ?? [];  // ? -> se arr3 è null restituisce null anzichè generare un errore
                                                               // ?? [] -> se l'operazione precedente è null restituisce array vuoto
console.log("arr3", arr3);
console.log("risultato3", risultato3);