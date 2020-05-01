import React, {Component} from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1><a href="/">All Memes</a></h1>
        <h1><a href="/MemeGenerator">Generate a Meme</a></h1>
        <h1><a href="/MyMemes">My Memes</a></h1>
      </div>
    )
  }
}

export default Navbar