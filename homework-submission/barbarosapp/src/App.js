import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Item from './components/ToDoList';

let todo = require('./data/data.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <section className="ToDoItem">
          <Item
            name={todo[0].name}
            deadLine={todo[0].deadline}
            check={todo[0].situation}
          />
          <input type="checkbox" value="Ok" />
          <input type="submit" value="Submit" />
        </section>

        <section className="ToDoItem">
          <Item
            name={todo[1].name}
            deadLine={todo[1].deadline}
            check={todo[1].situation}
          />
          <input type="checkbox" value="Ok" />
          <input type="submit" value="Submit" />
        </section>

        <section className="ToDoItem">
          <Item
            name={todo[2].name}
            deadLine={todo[2].deadline}
            check={todo[2].situation}
          />
          <input type="checkbox" value="Ok" />
          <input type="submit" value="Submit" />
        </section>
      </div>
    );
  }
}

export default App;
