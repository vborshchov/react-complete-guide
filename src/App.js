import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dcf2360b-8e5c-5041-a1ad-de2c40900bc0 ', name: 'Vitya', age: 33 },
      { id: 'a685d72f-34bf-54b6-913c-1e2fa0039862 ', name: 'Olesya', age: 28 },
      { id: 'd61b927e-cbe1-5b93-996d-a567e2ed2bd9 ', name: 'Alex', age: 4 }
    ],
    showPersons: false
  }

  namedChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.namedChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let clasess = []

    if (this.state.persons.length <= 2) {
      clasess.push('red')
    }
    if (this.state.persons.length <= 1) {
      clasess.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a Ract App!</h1>
        <p className={clasess.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this works now?'))
  }
}

export default App;
