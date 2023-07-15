import { useState } from "react";

function PizzaPlace(props) {

  const [newTopping, setNewTopping] = useState('');
  const [toppings, setToppings] = useState(['cheese', 'pepperoni']);

  const handleChange = (event) => {
    // event.target.value
    setNewTopping(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // No no! editing existing state (REF)
    // toppings.push(newTopping);
    // setToppings(toppings);

    // React does not do deep comparison of objects/arrays;
    // React only compares with === (Object.is()), if it's considered
    // equal, it WILL skip re-rendering
    //
    // always clone, then modify the new array/object
    // spread syntax most popular
    setToppings([...toppings, newTopping]);
    // "pure" functions (no side-effect, not modifying the existing array) also work
    // setToppings(toppings.concat([newTopping]))

  }

  return (
    <section>
      <h2>{props?.name || 'My Pizza Place'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter a new topping:
          <input
            type="text"
            onChange={handleChange}
            value={newTopping} />
          <input type="submit" value="Add topping!" />
        </label>
      </form>

      <p>New topping: {newTopping}</p>

      <h3>Requested toppings</h3>
      <ul>
        { toppings.map((topping, index) => {
          return (
            <li key={index}>
              {topping}
            </li>
          )
        }) }
      </ul>
    </section>
  )
}

export default PizzaPlace;