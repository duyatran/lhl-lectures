import React, {Component} from  'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props); // obscure errors may happen w/ super();
    this.state = {
      title: "",
      interval: null
    };
  }

  // the component has mounted successfully
  // set up timers, fetch data
  // only run once
  // useEffect(() => {}, []);
  componentDidMount() {
    console.log("the component has mounted successfully")
    const interval = setInterval(() => {
      console.log('interval fired');
    }, 1000);
    this.setState({ interval });
  }

  // run every time component updates
  // run logic depending on state or props
  // useEffect(() => {}, [title]);
  componentDidUpdate(prevProps, prevState) {
    // ALL UPDATE LOGIC LIVES HERE

    console.log("the component is updated")
  }

  // runs right before component unmounts
  // clean up: clear intervals, close socket connection
  // useEffect that returns a "cleanup" function
  // NOTE: Remove StrictMode for componentWillUnmount to be called
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  handleInput(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={(e) => this.handleInput(e)}
          value={this.state.title}
        />
        <h2>Title: {this.state.title}</h2>
      </div>
    );
  }
}

export default LifeCycle;
