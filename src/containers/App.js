import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[App.js] Inside Contructor', props);
    this.state = {
      persons:[
        {id: '0001', name: 'Max', age: 28 },
        {id: '0002', name: 'Manu', age: 26 },
        {id: '0003', name: 'Nick', age: 32 }
      ]
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount', this.props);
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount', this.props);
  }

  /*state = {
    persons:[
      {id: '0001', name: 'Max', age: 28 },
      {id: '0002', name: 'Manu', age: 26 },
      {id: '0003', name: 'Nick', age: 32 }
    ]
  }*/

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    console.log('[App.js] Inside render', this.props);
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>;
    }

    return (
        <div className={classes.App}>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
