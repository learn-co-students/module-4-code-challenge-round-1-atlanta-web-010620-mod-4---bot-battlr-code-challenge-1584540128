import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
state={
		isHidden:true
	}
  displayBots = (bots) => {
		return bots.map(bot => <BotCard bot={bot} botClick={this.props.botClick} key={bot.id}/>)
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.displayBots(this.props.bots)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
