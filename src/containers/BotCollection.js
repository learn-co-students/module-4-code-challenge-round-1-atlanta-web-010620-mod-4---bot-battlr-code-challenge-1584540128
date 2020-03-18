import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


	displayBots = (bots) => {
		return bots.map(bot => <BotCard bot={bot} botClick={this.props.botClick} key={bot.id}/>)
	}

	

	render(){
		return (
			<div className="ui four column grid">
			<div className="row">
			Collection of all bots
			{this.displayBots(this.props.bots)}
			</div>
			</div>
		);
	}

};

export default BotCollection;
