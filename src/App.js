import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Vitya', age: 33 },
      { name: 'Olesya', age: 28 },
      { name: 'Alex', age: 4 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Olesya', age: 29 },
        { name: 'Oleksiy', age: 4 }   
      ]
    })
  }

  namedChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Vitya', age: 33 },
        { name: event.target.value, age: 29 },
        { name: 'Oleksiy', age: 4 }   
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a Ract App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Victor')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.namedChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Vitya!')} >My Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this works now?'))
  }
}

export default App;
