import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }

  render() {
    const { monster, searchField } = this.state;
    const filterMonster = monster.filter(
      monsters =>
        monsters.name.toLowerCase().includes(searchField.toLowerCase()) ||
        monsters.email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="...Search"
          handleSearch={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default App;
