import React, {Component} from  'react';

class ClassBased extends Component {
  constructor(props) {
    super(props); // obscure errors may happen w/ super();
    this.state = {
      greeting: "hello from state",
      counter: 0,
      anotherKey: ""
    };

    // when clickHandler is called, bind the keyword "this" mentioned in clickHandler to always mean this particular instance of ClassBased
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // In ES6 arrow functions, "this" keyword always refers to its parent scope's "this"
  clickHandler = () => {
    // WRONG
    // this.state.counter += 1

    // Difference from functional componenets: no need to spread previous state
    // setState merges your object into this.state
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h1>{this.state.greeting}</h1>
        <h1>Counter: {this.state.counter}</h1>
        {/* <button onClick={() => this.clickHandler()}>Increment!</button> */}
        <button onClick={this.clickHandler}>Increment!</button>
      </div>
    );
  }
}

export default ClassBased;

// React doing BTS
// props = { message }
// const classBased = new ClassBased(props);
// updateDOM()
// classBased.componentDidMount();
// ...
// ..