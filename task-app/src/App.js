import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        task: ["Task 1", "Task 2", "Task 3"],
    };
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClearArray = () => {
    this.setState({ task: [] });
    console.log('Clear Array!');
  };

  onClickBtn() {
    console.log('Button has been clicked!');
  }


  render() {
    return (
      <div>
        <h1>Task List</h1>
        <button onClick={this.onClickBtn}>Click Me!</button>

        <button type="button" onClick={this.onClearArray}>Clear Array</button>
      </div>
    );
  }
}

export default App;