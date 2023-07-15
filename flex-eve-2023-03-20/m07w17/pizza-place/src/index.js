import React from 'react';
import ReactDOM from 'react-dom/client';
import PizzaPlace from './components/PizzaPlace';
import PizzaPlaceWithObjState from './components/PizzaPlaceWithObjState';
// import SayHello from './components/SayHello';
// import Counter from './components/BadCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PizzaPlace />
    <PizzaPlaceWithObjState />
  </React.StrictMode>
);

