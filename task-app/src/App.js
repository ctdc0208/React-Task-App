import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
  }


  


  render() {
    return (
      <div>
        <h1>Task List</h1>
        <form>
          <label htmlFor='new-task'>
            What needs to be done?
          </label>
          <input
            id="new-task"
          />
          <button>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default App;