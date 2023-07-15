import { useState } from 'react';

const PizzaPlaceWithObjState = (props) => {
    const [pizza, setPizza] = useState({
        newTopping: '',
        toppings: ['cheese']
    });

    const handleChange = (event) => {
        setPizza((prev) => {
            return {...prev, newTopping: event.target.value};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // One way of deep-cloning this particular object
        setPizza((prev) => {
            return {
                ...prev,
                toppings: [...prev.toppings, pizza.newTopping],
                newTopping: ''
            };
        });
    };

    return(
        <section>
            <h2>{props?.name || 'Pat\'s Pizza Place'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter a new topping:
                    <input
                        type="text"
                        onChange={handleChange}
                        value={pizza.newTopping}
                    />
                </label>
                <input type="submit" value="Add Topping" />
            </form>
            <p>New Topping: {pizza.newTopping}</p>
            <h3>Requested Toppings:</h3>
            <ul>
                {pizza.toppings.map((topping, index) => {
                    return (
                        <li key={index}>
                            {topping}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default PizzaPlaceWithObjState;