import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"


const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    botArmy:[]
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({bots:data}))
  }

  // 3. Enlisting and Discharging bots
  botCollectionClick = (bot) => {
    (this.state.botArmy.filter(filterBot => filterBot.id === bot.id).length < 1)
    ?
    this.setState({botArmy:[...this.state.botArmy,bot]})
    :
    null
  }

  botArmyClick = (bot) =>{
    console.log(bot)
    const newBots = this.state.botArmy.filter(filterBot => filterBot.id !== bot.id)
    this.setState({botArmy:newBots})
  }

  render() {
    return (
      <div>
        {<YourBotArmy bots={this.state.botArmy} botClick={this.botArmyClick}/>}
        {<BotCollection bots={this.state.bots} botClick={this.botCollectionClick}/>}
      </div>
    );
  }

}

export default BotsPage;
