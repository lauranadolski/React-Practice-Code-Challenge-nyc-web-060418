import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    allSushi: [],
    allAvailableSushi: [],
    alreadyEatenSushi: [],
    sushiToDisplay: [],
    monies: 100,
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({
        allSushi: data,
        allAvailableSushi: data
      }, () => {
        let helperFriend = [this.state.allSushi[0], this.state.allSushi[1], this.state.allSushi[2], this.state.allSushi[3]];
        console.log("i yam helper frand", helperFriend);
        this.setState({
          sushiToDisplay: helperFriend
        })
      }));
  }

  eatenOrNot = (targetSushi) => {
    if (this.state.alreadyEatenSushi.includes(targetSushi)) {
      return true;
    } else {
      return false;
    }
  }

  eatTheSushi = (targetSushiId) => {
    console.log("state before", this.state)
    let thingie = this.state.allAvailableSushi.find((sushi) => {
      return sushi.id === targetSushiId
    })
    console.log("I am thingie", thingie);

    let helperArray = this.state.allAvailableSushi;
    let targetIndex = helperArray.indexOf(thingie);
    console.log(targetIndex)
    helperArray.splice(targetIndex, 1);
    console.log(helperArray);

    this.setState({
      monies: this.state.monies - thingie.price,
      allAvailableSushi: helperArray,
      alreadyEatenSushi: [...this.state.alreadyEatenSushi, thingie]
    }, () => {
      if (this.state.monies <= 0){
        alert("you have no more money sucka!!! leave now!!");
        window.location.reload()
      }
    })
  }

  changeSushiToDisplay = () => {

    let myTarget = this.state.allSushi.indexOf(this.state.sushiToDisplay[3])
    let helpie = [this.state.allSushi[myTarget], this.state.allSushi[myTarget + 1], this.state.allSushi[myTarget + 2], this.state.allSushi[myTarget + 3]]

    this.setState({
      sushiToDisplay: helpie
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          allAvailableSushi={this.state.allAvailableSushi}
          alreadyEatenSushi={this.state.alreadyEatenSushi}
          eatenOrNot={this.eatenOrNot}
          eatTheSushi={this.eatTheSushi}
          sushiToDisplay={this.state.sushiToDisplay}
          changeSushiToDisplay={this.changeSushiToDisplay}
           />
        <Table
        alreadyEatenSushi={this.state.alreadyEatenSushi}
        monies={this.state.monies}
        />
      </div>
    );
  }
}

export default App;
