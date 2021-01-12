import "./App.css";
import MyCard from "./components/MyCard/MyCard";
import MyFollowers from "./components/MyFollowers/MyFollowers";
import React from "react";
import axios from "axios";
// import {data, followers} from "./data";

class App extends React.Component {
  state = {
    data: {},
    followers: [],
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/BrianReisman')
    .then(res => {
      console.log(res.data)
      this.setState({ data: res.data });
    })
    .catch()

    axios.get('https://api.github.com/users/BrianReisman/followers')
    .then(res => {
      console.log(res.data)
      this.setState({ followers: res.data });
      })
      .catch()
  }

  render() {
    console.log(this.state.data);
    console.log(this.state.followers);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to my GitHub Page</h1>
          <MyCard data={this.state.data} />
          <MyFollowers followers={this.state.followers}/>
        </header>
      </div>
    );
  }
}

export default App;
