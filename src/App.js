import "./App.css";
import MyCard from "./components/MyCard/MyCard";
import MyFollowers from "./components/MyFollowers/MyFollowers";
import React from "react";
import axios from "axios";
import {data, followers} from "./data";

class App extends React.Component {
  state = {
    data: {},
    followers: [],
  };

  componentDidMount() {
    this.setState({ data: data });
    this.setState({ followers: followers });
    // axios.get('https://api.github.com/users/BrianReisman/')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch()
    // axios.get('https://api.github.com/users/BrianReisman/followers')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch()
  }



  render() {
    console.log(this.state.data);
    console.log(this.state.followers);
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Lowdown on my Github Account</h1>
          <MyCard data={this.state.data} />
          <MyFollowers followers={this.state.followers}/>
        </header>
      </div>
    );
  }
}

export default App;
