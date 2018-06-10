import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constuctor', props)
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }
  
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()')
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentDidUpdate()', nextProps, nextState)
  }

  state = {
    persons: [
      { id: 'dcf2360b-8e5c-5041-a1ad-de2c40900bc0 ', name: 'Vitya', age: 33 },
      { id: 'a685d72f-34bf-54b6-913c-1e2fa0039862 ', name: 'Olesya', age: 28 },
      { id: 'd61b927e-cbe1-5b93-996d-a567e2ed2bd9 ', name: 'Alex', age: 4 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] Inside render()')
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }



    return (
        <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons : true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
