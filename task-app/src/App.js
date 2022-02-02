import React, { Component } from 'react';
import Overview from './Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }  

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <Overview items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-task'>
            What needs to be done?
          </label>
          <input
            id="new-task"
            onChange={this.handleChange}
            value={this.state.text}
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