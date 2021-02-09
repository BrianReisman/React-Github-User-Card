import React from "react";
import axios from 'axios';

import "./App.css";
import UserCard from './Components/UserCard';

const name = 'BrianReisman';

class App extends React.Component {
  state = {
    userData: {}
  }
  componentDidMount(){
    console.log('[CDM]')
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(res => {
        console.log(res.data)
        this.setState({userData: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
            test from App.js
            <UserCard userData={this.state.userData}/>
        </header>
      </div>
    );
  }
}

export default App;
