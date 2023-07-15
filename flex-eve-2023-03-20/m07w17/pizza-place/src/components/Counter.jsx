import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [currentVal, updater function]

  const handleClick = () => {
    // OK for simple apps/state
    setCount(count + 1); // tells React to queue up an async update
    // console.log(count);

    // Most appropriate way if the new state depends on the previous state
    // e.g.: toggle an on/off switch/option
    setCount((prevCount) => {
      return prevCount + 1;
    })
  }

  return (
    <section>
      <h2>Counter component</h2>
      <p>Counter has been clicked {count} times.</p>
      <button onClick={handleClick}>Increment!</button>
    </section>
  )
}

export default Counter;