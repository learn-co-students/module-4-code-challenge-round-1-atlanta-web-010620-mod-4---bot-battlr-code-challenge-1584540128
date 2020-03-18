import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: [],
    selectedBot: false,
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
        myBots: [...this.state.myBots, bot],
        selectedBot: false,
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

  hideBotDetails = () => {
    this.setState({selectedBot: false})
  }

  showBotDetails = (bot) => {
    this.setState({selectedBot: bot})
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} removeFromArmy={this.removeFromArmy}/>
        {this.state.selectedBot 
          ? <BotSpecs bot={this.state.selectedBot} hideBotDetails={this.hideBotDetails} addToArmy={this.addToArmy}/>  
            : <BotCollection bots={this.state.bots} showBotDetails={this.showBotDetails} />}
      </div>
    );
  }

}

export default BotsPage;
