import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constuctor', props)
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()')
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()')
    }

    componentWillReceiveProps( nextProps ) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState)
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()')
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()', nextProps, nextState)
    }

    render () {
        console.log('[Persons.js] Inside render()')
        return this.props.persons.map( ( person, index ) => {
            return <Person
              click={() => this.props.clicked( index )}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.props.changed( event, person.id )} />
        }  );
    };
}

export default Persons;