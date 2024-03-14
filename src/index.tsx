import React from 'react';
import ReactDOM from 'react-dom/client';
//import App, {MyComponent} from './App';
import App, {CyclicRenderingComponent} from './App';

//l'applicazione React verrà montata sul div root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//metodo che reinderizza il componente App in root
root.render(<CyclicRenderingComponent />);
root.render(<App />)
//root.render(<MyComponent />); //usando <> usiamo il componente come tag html