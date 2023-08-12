import './App.css';
import ClassBased from './components/ClassBased';
import { useState } from 'react';

const App = () => {
  const [showWillUnmount, setWillUnmount] = useState(true);

  return (
    <div className="App">
      {/* <h2>M08W21 - Class-based Components</h2> */}
      <button onClick={() => setWillUnmount(!showWillUnmount)}>TOGGLE!</button>
      {showWillUnmount && <h2>M08W21 - Class-based Components</h2>}
      {!showWillUnmount && <ClassBased message="world"/>}
    </div>
  );
};

export default App;


// const jsx = App();
