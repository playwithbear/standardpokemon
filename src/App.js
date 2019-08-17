import React, { Component } from 'react'

// Import local components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export class App extends Component {
constructor() {
  super()
  this.state = {
    sets: [],
    loadingSets: true,
    /** 
     * I need to keep setCycles updated to allow for formatting by cycle
     * (and rotation to allow for delays in updates from the API...)
     * The year as key is the year the sets will cycle out, NOT the Pokemon season
     * */
    setCycles: {
      "promos" : ["smp"],
      "2020" : ["sm5", "sm6", "sm7", "sm75", "sm8"],
      "2021" : ["sm9", "det1", "sm10", "sm11", "sm115", "sm12"],
      "2022" : [] // Sword and Shield onwards
    }
  }

}

async componentDidMount() {
  const url = "https://api.pokemontcg.io/v1/sets/"
  const response = await fetch(url)
  const data = await response.json()
  // Filters sets to just those indicated as Standard Legal
  const filtered = data.sets.filter((set) => set.standardLegal)
  this.setState({sets: filtered, loadingSets: false})
  
}

  render() {
    return (
      <div className="container">
        <Header />
        <Main setList={this.state.sets} loadingSets={this.state.loadingSets} setCycles={this.state.setCycles} />
        <Footer />
      </div>
    )
  }
}

export default App
