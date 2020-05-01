import React, {Component} from "react"
// import axios from "axios"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveMeme = this.saveMeme.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
    console.log(this.state.randomImg)
  }

  saveMeme() {
    fetch("http://localhost:3001/api/memes", {
      method: "post",
      body: JSON.stringify({    //JSON.stringify() converts JS to string to exchange data to/from web server
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        img: this.state.randomImg
      }),
      headers: {
        "Content-Type": "application/json" //content header, info about data returned (??)
      }
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    // axios.post(
    //   "http://localhost:3001/api/memes",
    //   { meme:
    //     {
    //       top_text: {this.state.topText},
    //       bottom_text: {this.state.bottomText},
    //       img: {this.state.randomImg}
    //     }
    //   }
    // )
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>

          <input 
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input 
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button >Generate</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>

        <button onClick={this.saveMeme}>Save Meme</button>
      </div>
    )
  }
}

export default MemeGenerator