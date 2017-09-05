var React = require('react');

var compStyle = {
	display: "inline-block",
	marginLeft: "auto",
	marginRight: 'auto'
}

var btnStyle = {
	height: '25px',
	width: '70px',
	marginTop: '10px',
	marginLeft: '5px'
}

class PetComponent extends React.Component {
	constructor(props){
		super(props);
		this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
		this.handleDislikeButtonClick = this.handleDislikeButtonClick.bind(this);
	}
	
	handleLikeButtonClick() {
		console.log('liked ' + this.props.petName);
	}

	handleDislikeButtonClick() {
		console.log('disliked ' + this.props.petName);
	}

	render() {
		return (
			<div style={compStyle}>
				<h3>{this.props.petName} Component</h3>
				<img style={{height:300, width:300}} src={this.props.petImageURL} alt={'Cute ' + this.props.petName}/>
				<br />
				<button style={btnStyle} onClick={this.handleLikeButtonClick}>Like</button>
				<button style={btnStyle} onClick={this.handleDislikeButtonClick}>Dislike</button>
			</div>
		);
	}
}




module.exports = PetComponent;