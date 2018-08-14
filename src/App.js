import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 26 },
      {name: 'Nick', age: 32 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Leandro';
    this.setState({
      persons:[
        {name: newName, age: 28 },
        {name: 'Manu', age: 26 },
        {name: 'Nick', age: 32 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>React App</h1>
      <p>This is really working</p>
      <button onClick={() => this.switchNameHandler('Leandro')}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Laura')}>My hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
