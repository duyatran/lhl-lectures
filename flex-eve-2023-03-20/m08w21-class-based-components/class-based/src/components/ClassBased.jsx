import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    // super(); DON'T DO THIS
    super(props);

    this.state = {
      greeting: "Aliya",
      counter: 0,
      anotherKey: '',
      interval: null
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // BIG DIFFERENCE with useState hook setter
    // b/c setState merges objects
    this.setState({
      counter: this.state.counter + 1,
      // anotherKey: 1 DON'T ADD PROPERTIES WHEN CALLING this.setState
    });

    // Avoid stale value by using the callback form
    // this.setState((prev) => {
    //   return prev.counter + 1;
    // });
  }

  // Similar to: useEffect(() => {}, [])
  // Run once (when component has just been mounted)
  // establish a socket connection, initial API call, set up intervals
  componentDidMount() {
    console.log('componentDidMount here');

    const interval = setInterval(() => {
      console.log('interval fired')
    }, 2000);

    this.setState({ interval });
  }

  // Similar to: useEffect(() => {}, [greeting, anotherKey])
  componentDidUpdate(prevProps, prevState) {
    if (this.state.greeting !== prevState.greeting) {
      // do some logic
    } else if (this.state.anotherKey !== prevState.anotherKey) {
      // do some logic
    }
    // ALL UPDATE LOGIC LIVES IN THIS FUNCTION
    console.log('componentDidUpdate called!')
  }

  // to clean up socket connections, intervals
  // similar to useEffect(() => { return ()=>{} }, [greeting])
  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.state.interval);
  }

  render() {
    const { message } = this.props;

    return (
      <div>
        <h2>Hello {message}!</h2>
        <h2>Hi {this.state.greeting}!</h2>
        <input
          onChange={(event) => this.setState({greeting: event.target.value})}
          value={this.state.greeting}>
        </input>
        <h2>Counter: {this.state.counter}!</h2>
        <button onClick={() => this.clickHandler()}>Increment!</button>
      </div>
    );
  }


}

export default ClassBased;




// const classBased = new ClassBased();
// const jsx = classBased.render();

// after mounting
// ClassBased.doThisAfterMounted();