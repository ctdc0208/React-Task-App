import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  


  render() {
    return (
      <div>
        <h1>Task List</h1>
      </div>
    );
  }
}

export default App;