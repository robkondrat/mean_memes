import React, {Component} from 'react'
import axios from 'axios'

class MemesIndex extends Component {
  constructor() {
    super()
    this.state = {
      memes: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/memes")
    .then(response => {
      console.log(response)
      this.setState({memes: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1><a href="/MemeGenerator">Generate a Meme</a></h1>
        {this.state.memes.map((meme) => {
          return(
            <div className="meme" key={meme.id} >
              <img src={meme.img} alt="problem?"/>
              <h2 className="top">{meme.top_text}</h2>
              <h2 className="bottom">{meme.bottom_text}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MemesIndex