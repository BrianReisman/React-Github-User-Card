import React from "react";
import axios from "axios";

import "./App.css";
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";

const name = "BrianReisman";

class App extends React.Component {
  state = {
    userData: null,
    followersData: null,
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => {
        setTimeout(() => {
          this.setState({ userData: res.data });
        }, 2000);
        axios
          .get(`https://api.github.com/users/${name}/followers`)
          .then((res) => {
            setTimeout(() => {
              this.setState({ followersData: res.data });
            }, 4000);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const display = this.state.userData ? (
      <div>
        <UserCard userData={this.state.userData} />
      </div>
    ) : (
      <h1>Please hold while your data is fetched...</h1>
    );

    const followers = this.state.followersData ?         this.state.followersData.map((follower, i) => {
      return <FollowerCard key={i} followerData={follower} />;
    }) : <p>Followers will be here soon!</p>


    return (
      <div className="App">
        <header className="App-header">
          {display}
          {followers}
        </header>
      </div>
    );
  }
}

export default App;
