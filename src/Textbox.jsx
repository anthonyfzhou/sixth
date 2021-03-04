import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["Wow I can't believe you made it this far",
				"honestly this took a LOT of work to make so thanks for sticking through it!",
				"well anyways, back to the story",
				"you realize you hate ducks because ducks are pretty evil creatures, or was it geese? Regardless u are tryna DIP from that last room",
				"in the next room, you see your 2 education chairs deep in a heated debate so you decide to listen in",
				"(these are not indicative of their actual opinions which IDK what they are)",
				"'Sliver is actual garbage like how can you eat there' - susan",
				"'What, but it has seven different flavors every WEEK! and the sauces are so good!' - ali",
				"obviously, one person is incorrect, and her names rhymes with sally",
				"surprisingly, this has nothing to do with the password for this stage",
				"Again, you know there must be some encoded text, but this time it has an encryption key",
				"A random piece of paper informs you that the encryption key is in the format WORDNUMBERWORD",
				"e.g. duck52grass",
				"but how will you get the words and the correct number???",
				"Conveniniently, the back of the paper tells you that the number is found in a picture of one of your education directors in a page you should have visited previously",
				"where could this picture be?",
				"In addition, the FIRST word of the key is a hobby that one of the education directors have when she's not on campus, where would she list her hobbies?",
				"Maybe for a class she TAs?",
				"Finally, the final word can be found in the same picture where you located the number, it is the only NON-INTERRUPTED word in the picture",
				"Lastly, the phrase to decode along with the encryption/decryption method is somewhere on this page!"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 20,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	renderContent() {
		if (this.state.index >= 6) {
			return <div className="content">
					<img id="otp" src={require('./VKQGAVCTUVKTFWF.png').default} />
				   </div>;
		}
		return null;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;

