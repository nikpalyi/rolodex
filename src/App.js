import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    //this is referrencing the object that is executing the current function
    //if the function is part of object, we call it METHOD! ->referrrences the OBJECT itself
    //method , the refrrences to OBJECT
    //function, then refrrences to global ( window-browser, global-node)

    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this); <- if the handleChange is NOT ARROW function!
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //destructuring:
    const { monsters, searchField } = this.state;
    // SAME LIKE const monsters = this.state.monsters;
    // AND const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h2>Email address list</h2>
        <SearchBox
          placeholder='TYPE NAME OR EMAIL...'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
