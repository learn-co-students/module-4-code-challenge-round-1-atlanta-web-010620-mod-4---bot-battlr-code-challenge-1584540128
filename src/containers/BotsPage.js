import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"


const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots:[],
    botArmy:[],
    show:'botCollection',
    showBot:""
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({bots:data}))
  }

  // 3. Enlisting and Discharging bots
  botCollectionClick = (bot) => {
    if (this.state.show === 'botCollection'){
      console.log(this.state.show)
      this.setState({show:'botSpecs', showBot:bot})
      return <BotSpecs bot={this.state.showBot}/>
    }else{
      console.log(this.state.show)
      this.setState({show:'botCollection'})
    }
  }

  botArmyClick = (bot) =>{
    console.log(bot)
    const newBots = this.state.botArmy.filter(filterBot => filterBot.id !== bot.id)
    this.setState({botArmy:newBots})
  }

  botSpecsEnlistClick = (bot) => {
    (this.state.botArmy.filter(filterBot => filterBot.id === bot.id).length < 1)
    ?
    this.setState({botArmy:[...this.state.botArmy,bot],show:'botCollection'})
    :
    null
  }

  botSpecsGoBackClick = () => {
    this.setState({show:'botCollection'})
  }

  render() {
    return (
      <div>
        {<YourBotArmy bots={this.state.botArmy} botClick={this.botArmyClick}/>}
        
        {(this.state.show === 'botCollection')
        ?
        <BotCollection bots={this.state.bots} botClick={this.botCollectionClick}/>
        :
        <BotSpecs 
          bot={this.state.showBot} 
          botSpecsEnlistClick={this.botSpecsEnlistClick} 
          botSpecsGoBackClick={this.botSpecsGoBackClick}
        />
        }
      </div>
    );
  }

}

export default BotsPage;
