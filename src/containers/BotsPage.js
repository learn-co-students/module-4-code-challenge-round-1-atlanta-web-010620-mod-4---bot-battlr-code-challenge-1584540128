import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: [],
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => {
      this.setState({bots: bots})
    })
  }

  addToArmy = (bot) => {
    if (this.state.myBots.filter( oldBot => oldBot === bot).length === 0) {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    } else {
      alert('Bot already in your army.')
    }
  }

  removeFromArmy = (bot) => {
    this.setState({
      myBots: this.state.myBots.filter(oldbot => oldbot !== bot)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} removeFromArmy={this.removeFromArmy}/>
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
