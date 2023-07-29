//import { Component } from "react";
import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredArray, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  useEffect(() => {
    const newFilteredArray = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    setFilteredMonsters(newFilteredArray);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="search monsters"
      />
      <CardList monsters={filteredArray} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchField: event.target.value };
//     });
//   }

//   render = () => {
//     const filteredArray = this.state.monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
//     );

//     return (
//       <div className="App">
//         <SearchBox onChangeHandler={this.onSearchChange} className='monsters-search-box' placeholder='search monsters'/>
//         <CardList monsters={filteredArray}/>
//       </div>
//     );
//   };
// }
export default App;
