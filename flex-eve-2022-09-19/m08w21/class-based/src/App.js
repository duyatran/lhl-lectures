import {useState} from 'react';

import './App.css';
import ClassBased from './components/ClassBased';
import LifeCycle from './components/LifeCycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Toggle showLifecycle</button>
      {/* <h2>M08W21 - Class-based Components</h2> */}
      {/* <ClassBased message={ "hello" }/> */}

      { showLifecycle && <LifeCycle /> }
      { !showLifecycle && <ClassBased /> }
    </div>
  );
};

export default App;
