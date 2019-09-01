import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/Card-list/card-list.component';
import {SearchBox} from './components/Search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hros : [],
      searchInput : ''
    }
    //this.handleChange = this.handleChange.bind(this);
  }
handleChange = (e) => {
  this.setState({searchInput : e.target.value});
}
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(user => {this.setState({hros:user})})
  }
render() {
  const {hros,searchInput} = this.state;
  console.log("heroes...", hros);

  const filteredHeroes = hros.filter(hero => hero.name.toLowerCase().includes(searchInput.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder='Search Hero' handleChange={this.handleChange}></SearchBox>
        {/* <input type='text' placeholder='search our hero' onChange={e=>{this.setState({searchInput : e.target.value}, () => console.log(this.state))}}></input> */}
       <CardList hros={filteredHeroes} />
       <SearchBox placeholder='hohoho...' handleChange={e=> {console.log('re-used state',e.target.value)}} />
     </div>
    );
  }
}

export default App;
