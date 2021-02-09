import React, { Component } from 'react'

export default class FollowerCard extends Component {
  render() {
    const {followerData} = this.props 
    console.log(followerData)
    return (
      <div>
        follower code name: {followerData.login}
        <img src={followerData.avatar_url}  style={{width: '10vw'}} alt="profile"/>
        <p>Check them out <a href={followerData.html_url}>here</a>.</p>
      </div>
    )
  }
}
