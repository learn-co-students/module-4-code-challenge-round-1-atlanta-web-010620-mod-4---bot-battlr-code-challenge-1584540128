import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import Search from '../components/Search'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: [],
    selectedBot: false,
    search: '',
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
        search: '',
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
    this.setState({
      selectedBot: false,
      search: '',
    })
  }

  showBotDetails = (bot) => {
    this.setState({selectedBot: bot})
  }

  handleSearchChange = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} removeFromArmy={this.removeFromArmy}/>
        <Search search={this.state.search} handleSearchChange={this.handleSearchChange}/>
        <br/>
        {this.state.selectedBot 
          ? <BotSpecs bot={this.state.selectedBot} hideBotDetails={this.hideBotDetails} addToArmy={this.addToArmy}/>  
            : <BotCollection 
              bots={this.state.bots.filter(bot => bot.name.toLowerCase().includes(this.state.search.toLowerCase()) || bot.bot_class.toLowerCase().includes(this.state.search.toLowerCase()))} 
                showBotDetails={this.showBotDetails} />}
      </div>
    );
  }

}

export default BotsPage;
